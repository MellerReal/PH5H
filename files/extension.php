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
    session_destroy();
    header("Location: http://localhost");
}
?>