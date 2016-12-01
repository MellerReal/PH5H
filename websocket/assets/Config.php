<?php

/**
 * Created by PhpStorm.
 * User: nosa0707
 * Date: 2016-12-01
 * Time: 20:21
 */
class Config
{
    public $cfg;

    public function Initialize() {
        $this->cfg["mysql_host"] = "localhost";
        $this->cfg["mysql_user"] = "root";
        $this->cfg["mysql_database"] = "ph5h";
        $this->cfg["mysql_pass"] = "";

        $this->cfg["ip"] = "192.168.0.3";
        $this->cfg["port"] = 9000;
    }

    public function GetConfig($data) {
        return $this->cfg[$data];
    }
}

?>