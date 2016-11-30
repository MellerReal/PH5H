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
?>