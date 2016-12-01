<?php

/**
 * Created by PhpStorm.
 * User: nosa0707
 * Date: 2016-12-01
 * Time: 22:11
 */
class GameClientManager
{
    //public static $GameClients = array();

    public function Initialize() {
        //$WebSocketManager = new WebSocketManager();
        //self::$GameClients = array($WebSocketManager->WebSocketManager);
    }

    public function OnReceiveConnection($ip) {
        $WebSocketManager = new WebSocketManager();
        $WebSocketManager->Console("Receiving connection from " . $ip);
    }

    public function GetGameClients() {
        //return self::$GameClients;
    }

    public function UpdateGameClients($new) {
        //$this->GameClients = $new;
    }
}

?>