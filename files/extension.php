<?php
/**
 * Created by PhpStorm.
 * User: nosa0707
 * Date: 2016-11-29
 * Time: 14:44
 */
if(isset($_GET["logout"])) {
    if(!$conn = mysqli_connect("localhost", "root", "", "PH5H"))
        die("Fatal Error, could not connect to database.");
    session_start();
    $username = $_SESSION["username"];
    mysqli_query($conn, "DELETE FROM actives WHERE username = '$username'");
    mysqli_close($conn);
    session_destroy();
    header("Location: http://localhost");
}
else if(isset($_GET["furnitures"])) {
    require "/items/items.php";
    if(!$conn = mysqli_connect("localhost", "root", "", "PH5H"))
        die("Fatal Error, could not connect to database.");
    session_start();
    $username = $_SESSION["username"];
    $result = mysqli_query($conn, "SELECT * FROM items WHERE owner = '$username'");
    if(mysqli_num_rows($result) > 0) {
        echo "<div class=\"search_bar\">";
        echo "  <form method=\"post\">";
        echo "      <input type=\"text\">";
        echo "      <p id=\"tba\">TBA</p>";
        echo "  </form>";
        echo "</div>";

        echo "<div class=\"items\">";
        for($cid = 1; $cid < 3; $cid++) {
            $item_count[$cid] = 0;
        }
        while($items = mysqli_fetch_array($result)) {
            $id = $items["itemid"];
            $id2 = $items["id"];
            //echo $items["itemid"] . "<br>";
            //echo $item[$id]["name"] . "<br>";
            //echo $item[$id]["description"] . "<br>";
            //echo $item[$id]["file"] . "<br>";
            if($item[$id]["allow_inv_stack"] == false)
                echo "<div id=\"hold\" class=\"" . $id . "\" onclick=\"ItemManager(" . $id . ", this);\"><img src=\"/files/items/" . $item[$id]["file"] . "/icon.png\"></div>";
            else {
                $item_count[$id] += 1;
            }
        }
        if(isset($item_count)) {
            for ($cid = 1; $cid < 3; $cid++) {
                if ($item_count[$cid] > 1) {
                    echo "<div id=\"hold\" class=\"" . $cid . "\" onclick=\"ItemManager(" . $cid . ", this);\"><p id=\"counts\">" . $item_count[$cid] . "</p><img src=\"/files/items/" . $item[$cid]["file"] . "/icon.png\"></div>";
                }
                else {
                    echo "<div id=\"hold\" class=\"" . $cid . "\" onclick=\"ItemManager(" . $cid . ", this);\"><img src=\"/files/items/" . $item[$cid]["file"] . "/icon.png\"></div>";
                }
            }
        }

        echo "</div>";
        echo "<div id=\"item_data\"></div>";
    }
    else {
        echo "<img id=\"empty\" src=\"files/images/other/inventory_image.png\">";
        echo "<p id=\"title\">This category seems to be<br>empty!</p>";
        echo "<p id=\"description\">You've ;either placed all your Furni in your rooms or you haven't purchased any yet.<br>Check the Habbo Shop to see what's available!</p>";
    }
}
else if(isset($_GET["furnidata"])) {
    require "/items/items.php";
    if(!$conn = mysqli_connect("localhost", "root", "", "PH5H"))
        die("Fatal Error, could not connect to database.");
    session_start();
    $username = $_SESSION["username"];
    $id = mysqli_escape_string($conn, stripslashes($_GET["furnidata"]));
    if($item[$id]["allow_trade"] == true)
        echo "<div id=\"tradeable\"></div>";
    else
        echo "<div id=\"non_tradeable\"></div>";
    if($item[$id]["allow_recycle"] == true)
        echo "<div id=\"recycleable\"></div>";
    else
        echo "<div id=\"non_recycleable\"></div>";
    echo "<div id=\"furni_hold\"><div id=\"itself\"><img src=\"/files/items/" . $item[$id]["file"] . "/" . $item[$id]["file"] . ".png?2\"></div></div>";
    echo "<p id=\"name\">" . $item[$id]["name"] . "</p>";
    echo "<p id=\"desc\">" . $item[$id]["description"] . "</p>";
    echo "<div id=\"button\" onclick=\"InventoryManagerPlaneInRoom();\">Place in room</div>";
    mysqli_close($conn);
}
else if(isset($_GET["room_data"])) {
    if(!$conn = mysqli_connect("localhost", "root", "", "PH5H"))
        die("Fatal Error, could not connect to database.");
    $roomid = mysqli_escape_string($conn, stripslashes($_GET["room_data"]));
    $result = mysqli_query($conn, "SELECT * FROM rooms WHERE id = $roomid");
    $room = mysqli_fetch_assoc($result);
    echo "owner=" . $room["owner"] . ";<br>\n";
    echo "actives=" . $room["actives"] . ";<br>\n";
    echo "max=" . $room["max_visits"] . ";<br>\n";
    echo "title=" . $room["title"] . ";<br>\n";
    echo "status=" . $room["status"] . ";";
    mysqli_close($conn);
}
else if(isset($_GET["nav_all"])) {
    if(!$conn = mysqli_connect("localhost", "root", "", "PH5H"))
        die("Fatal Error, could not connect to database.");
    //No table for room categories

    $code = mysqli_escape_string($conn, stripslashes($_GET["nav_all"]));
    $array = str_split($code, 1);

    echo "<div class=\"popular\">";
    if($array[0] == "0")
        echo "<div id=\"minimize\" onclick='RoomManager(\"minimize_all\");'></div>";
    else
        echo "<div id=\"maximize\" onclick='RoomManager(\"minimize_all\");'></div><script>$('.rooms_all').hide();</script>";
    echo "<p id=\"title\">Most Popular Rooms</p>";
    $room_result = mysqli_query($conn, "SELECT * FROM rooms ORDER BY actives DESC LIMIT 12");
    echo "<div class=\"rooms_all\">";
    while($room = mysqli_fetch_array($room_result)) {
        echo "<div id=\"room\" onclick=\"SendPacket('RoomManager.EnterRoom(" . $room["id"] . ");');\">";
        if($room["actives"] == 0)
            echo "<div id=\"actives_grey\">&nbsp;</div>";
        else {
            switch ($room["max_visits"]) {
                case 10:
                case 15:
                    echo "<div id=\"actives_green\">" . $room["actives"] . "</div>";
                    break;
                case 20:
                case 25:
                case 30:
                case 35:
                    echo "<div id=\"actives_orange\">" . $room["actives"] . "</div>";
                    break;
                case 40:
                case 45:
                case 50:
                    echo "<div id=\"actives_orange\">" . $room["actives"] . "</div>";
                    break;
                case 55:
                    echo "<div id=\"actives_red\">" . $room["actives"] . "</div>";
                    break;
                case 60:
                case 65:
                case 70:
                case 75:
                    echo "<div id=\"actives_red\">" . $room["actives"] . "</div>";
                    break;
            }
        }
            echo "<p id=\"title\">" . stripslashes($room["title"]) . "</p>";
        echo "<div id=\"info\"></div>";
        if($room["groupid"] != 0)
            echo "<div id=\"group\"></div>";
        if($room["status"] == 1)
            echo "<div id=\"locked\"></div>";
        else if($room["status"] == 2)
            echo "<div id=\"password\"></div>";
        echo "</div>";
    }
    echo "</div>";
    echo "</div>";

    echo "<div class=\"games\">";
    if($array[1] == "0")
        echo "<div id=\"minimize\" onclick='RoomManager(\"minimize_games\");'></div>";
    else
        echo "<div id=\"maximize\" onclick='RoomManager(\"minimize_games\");'></div><script>$('.rooms_games').hide();</script>";
    echo "<p id=\"title\">Habbo Games</p>";
    $room_result = mysqli_query($conn, "SELECT * FROM rooms WHERE category = 1 ORDER BY actives DESC LIMIT 12");
    echo "<div class=\"rooms_games\">";
    while($room = mysqli_fetch_array($room_result)) {
        echo "<div id=\"room\" onclick=\"SendPacket('RoomManager.EnterRoom(" . $room["id"] . ");');\">";
        if($room["actives"] == 0)
            echo "<div id=\"actives_grey\">&nbsp;</div>";
        else {
            switch($room["max_visits"]) {
                case 10:
                case 15:
                    echo "<div id=\"actives_green\">" . $room["actives"] . "</div>";
                    break;
                case 20:
                case 25:
                case 30:
                case 35:
                    echo "<div id=\"actives_orange\">" . $room["actives"] . "</div>";
                    break;
                case 40:
                case 45:
                case 50:
                    echo "<div id=\"actives_orange\">" . $room["actives"] . "</div>";
                    break;
                case 55:
                    echo "<div id=\"actives_red\">" . $room["actives"] . "</div>";
                    break;
                case 60:
                case 65:
                case 70:
                case 75:
                    echo "<div id=\"actives_red\">" . $room["actives"] . "</div>";
                    break;
            }
        }
        echo "<p id=\"title\">" . stripslashes($room["title"]) . "</p>";
        echo "<div id=\"info\"></div>";
        if($room["groupid"] != 0)
            echo "<div id=\"group\"></div>";
        if($room["status"] == 1)
            echo "<div id=\"locked\"></div>";
        else if($room["status"] == 2)
            echo "<div id=\"password\"></div>";
        echo "</div>";
    }
    echo "</div>";
    echo "</div>";
    mysqli_close($conn);
}
?>