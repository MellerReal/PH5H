<?php

/**
 * Created by PhpStorm.
 * User: nosa0707
 * Date: 2016-12-01
 * Time: 20:18
 */

require "/assets/config.php";
require "/assets/WebSocketManager.php";
require "/assets/DatabaseManager.php";
require "/assets/GameClientManager.php";

class Habbo
{
    private $Config;
    public $GameClientManager;
    public $WebSocketManager;
    private $DatabaseManager;

    public function Initialize() {
        $time = microtime();
        $time = explode(' ', $time);
        $time = $time[1] + $time[0];
        $start = $time;

        //All//
        $this->Config = new Config();
        $this->DatabaseManager = new DatabaseManager();
        $this->GameClientManager = new GameClientManager();
        $this->WebSocketManager = new WebSocketManager();

        // Configuration Initializement //
        $this->Config->Initialize();
        // DatabaseManager Initializement //
        $this->Console("Connecting to the database..");

        if($this->DatabaseManager->Connect($this->Config->GetConfig("mysql_host"), $this->Config->GetConfig("mysql_user"), $this->Config->GetConfig("mysql_pass"), $this->Config->GetConfig("mysql_database"))) {
            $this->Console("Connected to the database.");
        }
        else {
            $this->Console("Failed to connect to the database.");
            $this->Console("Please check your configuration.");
            exit;
        }
        if($this->DatabaseManager->CheckDatabase() === false) {
            $this->Console("Database are missing tables/rows, please update.");
            exit;
        }


        // GameClientManager //
        $this->Console("Booting up GameClientManagers..");
        $this->GameClientManager->Initialize();

        // WebSocket //
        $this->WebSocketManager->Initialize($this->Config->GetConfig("ip"), $this->Config->GetConfig("port"));


        $time = microtime();
        $time = explode(' ', $time);
        $time = $time[1] + $time[0];
        $finish = $time;
        $total_time = round(($finish - $start), 4);
        $this->Console("\n\rHabbo HTML5 started under " . $total_time . " seconds.");

        $true = true;
        while($true == true) {
            $this->WebSocketManager->RunWebSockets($this->Config->GetConfig("ip"), $this->Config->GetConfig("port"));
        }
    }

    public function __destruct() {
    }

    public function Console($message) {
        print_r($message . "\r\n");
    }
}

?>