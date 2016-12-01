<?php
/**
 * Created by PhpStorm.
 * User: nosa0707
 * Date: 2016-12-01
 * Time: 20:29
 */

require_once "Habbo.php";
$Habbo = new Habbo();
$Habbo->Initialize();
$WebSocketManager = new WebSocketManager();
while (true) {
    $WebSocketManager->RunWebSockets();
}
?>