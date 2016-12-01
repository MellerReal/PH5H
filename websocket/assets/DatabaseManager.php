<?php

/**
 * Created by PhpStorm.
 * User: nosa0707
 * Date: 2016-12-01
 * Time: 20:54
 */
class DatabaseManager
{
    public $mysql;

    public function Connect($host, $username, $database, $password) {
        $this->mysql = new mysqli($host, $username, $database, $password);
        if($this->mysql->errno) {
            return false;
        }
        else {
            return true;
        }
    }

    public function Close() {
        $this->mysql->close();
    }

    public function CheckDatabase() {
        //TBA
        return true;
    }
}

?>