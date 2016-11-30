<?php error_reporting(E_ALL); ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Project HTML5 Habbo</title>
        <link href="stylish.css?<?php echo rand(); ?>" rel="stylesheet">
        <link rel="shortcut icon" href="https://habboo-a.akamaihd.net/habbo-web/america/en/assets/images/favicon.08c747be.ico">
        <script src="//code.jquery.com/jquery-1.10.2.js"></script>
        <script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
        <script src="scriptish.js" rel="script"></script>
        <?php session_start(); ?>
        <?php
        if(!$conn = mysqli_connect("localhost", "root", "", "PH5H"))
            die("Fatal Error, could not connect to database.");
        ?>
    </head>
    <body onload="InventoryManager('furni');">
        <!-- Load External Variables (PHP) -->
        <?php require "files/external_variables.php"; echo"\n"; ?>
        <!-- End of Loading External Variables -->

        <!-- Landing View -->
            <?php if(!isset($_SESSION["user"])) { ?>
            <div id="landing_view_background_bottom_left" style="background: url(<?php echo $external_variables["landing.view.background.bottom.left"]; ?>) no-repeat;"></div>
            <div id="landing_view_background_bottom_right" style="background: url(<?php echo $external_variables["landing.view.background.bottom.right"]; ?>) no-repeat;"></div>
            <div id="landing_view_background_gradient" style="background: url(<?php echo $external_variables["landing.view.background.gradient"]; ?>) repeat;"></div>
            <div id="landing_view_background_logo" style="background: url(<?php echo $external_variables["landing.view.background.logo"]; ?>) no-repeat;"></div>
            <?php } else { ?>
            <div id="landing_view_background_bottom_left" style="bottom: 50px; background: url(<?php echo $external_variables["landing.view.background.bottom.left"]; ?>) no-repeat;"></div>
            <div id="landing_view_background_bottom_right" style="bottom: 50px; background: url(<?php echo $external_variables["landing.view.background.bottom.right"]; ?>) no-repeat;"></div>
            <div id="landing_view_background_gradient" style="background: url(<?php echo $external_variables["landing.view.background.gradient"]; ?>) repeat;"></div>
            <div id="landing_view_background_logo" style="background: url(<?php echo $external_variables["landing.view.background.logo"]; ?>) no-repeat;"></div>
            <?php } ?>
        <!-- End of Landing View -->

        <!-- Logon -->
            <?php
                if(isset($_POST["logon"])) {
                    if(isset($_POST["username"]))
                        $username = mysqli_escape_string($conn, stripslashes($_POST["username"]));
                    if(!isset($username))
                        $error = "You must enter a valid username.";
                    else {
                        if(mysqli_num_rows(mysqli_query($conn, "SELECT * FROM actives WHERE username = '$username' LIMIT 1")) == 1) {
                            $error = "This username is in use!";
                        }
                        else {
                            mysqli_query($conn, "INSERT INTO actives SET username = '$username', credits = 50000, pixels = 5000, diamonds = 0, roomvisits = 0");
                            $_SESSION["user"] = true;
                            $_SESSION["username"] = $username;
                            header("Location: /");
                        }
                    }
                }

                if(!isset($_SESSION["user"])) {
                    echo "<div class=\"box_x1\" id=\"centre\">\n";
                    echo "  <div id=\"header\">\n";
                    echo "      <p id=\"title\">Error</p>\n";
                    //echo "      <div id=\"close\">x</div>\n";
                    echo "  </div>\n";
                    echo "  <p id=\"information\">\n";
                    echo "      It seems like you're not connected yet!<br>Connect to Project HTML5 Habbo by entering a temporarly username:\n";
                    if(isset($error))
                        echo "      <br><font color=\"red\">$error</font>\n";
                    echo "      <form method=\"post\">\n";
                    echo "        <input type=\"text\" placeholder=\"Username\" name=\"username\">\n";
                    echo "        <input border=\"0\" type=\"submit\" id=\"button\" value=\"Enter\" name=\"logon\">\n";
                    echo "      </form>\n";
                    echo "  </p>\n";
                    echo "</div>\n";
                    die();
                }
                else {
                    $username = $_SESSION["username"];
                    $user = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM actives WHERE username = '$username'"));
                    $visits = $user["roomvisits"];
                    echo "<script>var roomvisits = $visits;</script>";
                }
            ?>
        <!-- End of Logon -->

        <!-- Purse -->
            <div class="purse">
                <div class="button_x1" id="help" title="Help">Help</div>
                <div class="button_x2" id="logout" title="Log out"></div>
                <div class="button_x3" id="settings" title="Settings"></div>
                <div id="vr"></div>
                <div class="diamonds" title="Diamonds">
                    <div id="diamonds"></div>
                    <div id="diamonds_amount"><?php echo $user["diamonds"]; ?></div>
                </div>
                <div class="credits" title="Credits">
                    <div id="credits"></div>
                    <div id="credits_amount"><?php echo $user["credits"]; ?></div>
                </div>
                <div class="pixels" title="Duckets">
                    <div id="pixels"></div>
                    <div id="pixels_amount"><?php echo $user["pixels"]; ?></div>
                </div>
            </div>
        <!-- End of Purse -->

        <!-- Help Box -->
            <div class="box_x2" id="help_centre">
                <div id="header">
                    <p id="title">Help</p>
                    <div id="close" onclick="cross('box_x2')"></div>
                </div>
                <p id="information">
                    How can we help you?
                    <img src="<?php echo $external_variables["help.box.image"]; ?>" id="image">
                    <p id="tip">Please pick a category!</p>
                    <div id="button1">I need help in using something</div>
                    <div id="button2">Someone is misbehaving</div>
                    <div id="button3">Customer Support Center</div>
                    <div id="button1_">I want someone to show me around</div>
                    <div id="button2_">Safety Tips</div>
                    <div id="button3_">Habbo Way</div>
                    <div id="button4_">Back</div>
                </p>
            </div>
        <!-- End of Help Box -->

        <!-- Inventory -->
            <div class="box_x4">
                <div id="header">
                    <p id="title">Inventory</p>
                    <div id="close" onclick="cross('box_x4');"></div>
                </div>
                <div id="information">
                </div>
                <div id="bar">
                    <p id="furnitures" onclick="InventoryManager('furni');">Furnitures</p>
                    <p id="rentables" onclick="InventoryManager('rentables');">Rentables</p>
                    <p id="pets" onclick="InventoryManager('pets');">Pets</p>
                    <p id="badges" onclick="InventoryManager('badges');">Badges</p>
                    <p id="bots" onclick="InventoryManager('bots');">Bots</p>
                </div>
            </div>
        <!-- End of Inventory -->

        <!-- Error Box #3 -->
        <div class="box_x3" id="centre2">
            <div id="header">
                <p id="title">Error</p>
                <div id="close" onclick="cross('box_x3')"></div>
            </div>
            <p id="information">
                This function were not found!
            </p>
            <div id="button" onclick="cross('box_x3')">Ok</div>
        </div>
        <!-- End of Error Box #3 -->

        <!-- Footer -->
            <footer>
                <div id="view" title="Go to your home room"></div>
                <div id="navigator" title="Rooms"></div>
                <div id="shop" title="Shop"></div>
                <div id="inventory" title="Inventory"></div>
                <div id="avatar" title="Me">
                    <img src="https://www.habbo.nl/habbo-imaging/avatarimage?figure=<?php echo $user["figure"]; ?>&size=m&direction=2&head_direction=2&crr=1&gesture=&frame=1">
                </div>
                <div id="vr"></div>

                <div id="collpase_right"></div>
                <div class="friends">
                    <?php
                    $friends = mysqli_query($conn, "SELECT * FROM friends WHERE user1 = '$username' OR user2 = '$username'");
                    if(mysqli_num_rows($friends) > 0) {
                        echo "<div id=\"friends_right\"></div>";
                        if(mysqli_num_rows($friends) == 1) {
                            echo "<div class=\"empty_user\" id=\"no_user\" onclick=\"findFriends(this);\"></div>";
                            echo "<div class=\"empty_user\" id=\"no_user\" onclick=\"findFriends(this);\"></div>";
                        }
                        else if(mysqli_num_rows($friends) == 2) {
                            echo "<div class=\"empty_user\" id=\"no_user\" onclick=\"findFriends(this);\"></div>";
                        }
                        while($row = mysqli_fetch_array($friends)) {
                            if($row["user1"] == $username)
                                $friend = $row["user2"];
                            else
                                $friend = $row["user1"];
                            $fuser = mysqli_query($conn, "SELECT * FROM actives WHERE username = '$friend';");
                            $fusers = mysqli_fetch_assoc($fuser);
                            echo "<div id=\"user\">";
                            echo "<img src=\"https://www.habbo.nl/habbo-imaging/avatarimage?figure=" . $fusers["figure"] . "&size=m&direction=2&head_direction=2&crr=1&gesture=&frame=1&headonly=1\">";
                            echo "<p>" . $friend . "</p>";
                            echo "</div>";
                        }
                        echo "<div id=\"friends_left\"></div>";
                    }
                    else { ?>
                        <div class="empty_user" id="no_user" onclick="findFriends(this);"></div>
                        <div class="empty_user" id="no_user" onclick="findFriends(this);"></div>
                        <div class="empty_user" id="no_user" onclick="findFriends(this);"></div>
                    <?php } ?>
                </div>
                <div id="search_friend" title="Search Habbos"></div>
                <div id="manage_friends" title="All Friends"></div>

                <div id="vr2"></div>
            </footer>
        <!-- End of Footer -->
        <?php mysqli_close($conn); ?>
    </body>
</html>