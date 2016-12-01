<?php

/**
 * Created by PhpStorm.
 * User: nosa0707
 * Date: 2016-12-01
 * Time: 21:00
 */
class WebSocketManager
{
    public static $WebSocketManager;
    public static $null = NULL;
    public static $GameClients = array();
    //public $GameClients = array($WebSocketManager);

    public function Initialize($ip, $port) {
        self::$WebSocketManager = socket_create(AF_INET, SOCK_STREAM, 0);
        socket_set_option(self::$WebSocketManager, SOL_SOCKET, SO_REUSEADDR, 0);
        socket_bind(self::$WebSocketManager, $ip, $port);
        socket_listen(self::$WebSocketManager);
        socket_accept(self::$WebSocketManager);
    }

    public function RunWebSockets() {
        $Config = new Config();
        $GameClientManager = new GameClientManager();
        $changed = self::$GameClients;
        if (false === socket_select($changed, self::$null, self::$null, 0, 10)) {
            echo "socket_select() error, Reason: " .
                socket_strerror(socket_last_error()) . "\n";
        }

        if (in_array(self::$WebSocketManager, $changed)) {
            $socket_new = socket_accept(self::$WebSocketManager);
            self::$GameClients = $socket_new;
            $header = socket_read($socket_new, 1024);
            $this->StartHandshaking($header, $socket_new, $Config->GetConfig("ip"), $Config->GetConfig("port"));
            socket_getpeername($socket_new, $ipv);
            $response = $this->Mask(json_encode(array('type' => 'system', 'message' => $ipv . ' connected'))); //prepare json data
            $this->SendPacket($response);
            $GameClientManager->OnReceiveConnection($ipv);

            $found_socket = array_search(self::$WebSocketManager, $changed);
            unset($changed[$found_socket]);
        }
    }

    public function Mask($text) {
        $b1 = 0x80 | (0x1 & 0x0f);
        $length = strlen($text);
        if ($length <= 125)
            $header = pack('CC', $b1, $length);
        elseif ($length > 125 && $length < 65536)
            $header = pack('CCn', $b1, 126, $length);
        elseif ($length >= 65536)
            $header = pack('CCNN', $b1, 127, $length);
        return $header . $text;
    }

    public function StartHandshaking($received_header, $client_conn, $host, $port) {
        $headers = array();
        $lines = preg_split("/\r\n/", $received_header);
        foreach ($lines as $line) {
            $line = chop($line);
            if (preg_match('/\A(\S+): (.*)\z/', $line, $matches)) {
                $headers[$matches[1]] = $matches[2];
            }
        }
        $secKey = $headers['Sec-WebSocket-Key'];
        $secAccept = base64_encode(pack('H*', sha1($secKey . '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')));
        $upgrade = "HTTP/1.1 101 Web Socket Protocol Handshake\r\n" .
            "Upgrade: websocket\r\n" .
            "Connection: Upgrade\r\n" .
            "WebSocket-Origin: $host\r\n" .
            "WebSocket-Location: ws://$host:$port/demo/shout.php\r\n" .
            "Sec-WebSocket-Accept:$secAccept\r\n\r\n";
        socket_write($client_conn, $upgrade, strlen($upgrade));
    }

    public function SendPacket($packet) {
        $GameClientManager = new GameClientManager();
        foreach ($GameClientManager->GameClients as $changed_socket) {
            @socket_write($changed_socket, $packet, strlen($packet));
        }
    }

    public function Console($text) {
        print_r($text . "\n\r");
    }
}

?>