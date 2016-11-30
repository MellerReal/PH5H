/**
 * Created by nosa0707 on 2016-11-28.
 */
/* Fake "packets" id's;

 box_x1 - Box #1 - Username Logon
 box_x2 - Box #2 - Help
 box_x3 - Box #3 - Custom Error
 box_x4 - Box #4 - Inventory
 */

function cross(parent) {
    var close = document.getElementsByClassName(parent);
    $(close).hide();
    $(".box_x3").hide();
};

function findFriends(id) {
    $(".box_x3 #header #title").html("Error");
    $(".box_x3 #information").html("This function has been delayed!");
    $(".box_x3").css("margin-top", " 20%");
    $(".box_x3").show();
};

function InventoryManager(id) {
    if(id == "furni") {
        $(".box_x4 #information").html("InventoryManager.Furni().html();");
        $(".box_x4 #bar #furnitures").css({"background" : " #ECEAE0", "border-left" : " 2px solid #FFF", "border-right" : " 2px solid #FFF", "border-top" : " 2px solid #FFF", "box-shadow" : " 0px 0px 0px 2px #000", "margin-right" : " -2px", "padding-left" : " 4px", "padding-right" : " 4px"});
        $(".box_x4 #bar #rentables").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 6px", "padding-right" : " 6px"});
        $(".box_x4 #bar #pets").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 6px", "padding-right" : " 6px"});
        $(".box_x4 #bar #badges").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 6px", "padding-right" : " 6px"});
        $(".box_x4 #bar #bots").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 6px", "padding-right" : " 6px"});
    }
    else if(id == "rentables") {
        $(".box_x4 #information").html("InventoryManager.Rentables().html();");
        $(".box_x4 #bar #rentables").css({"background" : " #ECEAE0", "border-left" : " 2px solid #FFF", "border-right" : " 2px solid #FFF", "border-top" : " 2px solid #FFF", "box-shadow" : " 0px 0px 0px 2px #000", "margin-right" : " -2px", "padding-left" : " 4px", "padding-right" : " 4px"});
        $(".box_x4 #bar #furnitures").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 6px", "padding-right" : " 6px"});
        $(".box_x4 #bar #pets").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 6px", "padding-right" : " 6px"});
        $(".box_x4 #bar #badges").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 6px", "padding-right" : " 6px"});
        $(".box_x4 #bar #bots").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 6px", "padding-right" : " 6px"});
    }
    else if(id == "pets") {
        $(".box_x4 #information").html("InventoryManager.Pets().html();");
        $(".box_x4 #bar #pets").css({"background" : " #ECEAE0", "border-left" : " 2px solid #FFF", "border-right" : " 2px solid #FFF", "border-top" : " 2px solid #FFF", "box-shadow" : " 0px 0px 0px 2px #000", "margin-right" : " -2px", "padding-left" : " 4px", "padding-right" : " 4px"});
        $(".box_x4 #bar #rentables").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 6px", "padding-right" : " 6px"});
        $(".box_x4 #bar #furnitures").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 6px", "padding-right" : " 6px"});
        $(".box_x4 #bar #badges").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 6px", "padding-right" : " 6px"});
        $(".box_x4 #bar #bots").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 6px", "padding-right" : " 6px"});
    }
    else if(id == "badges") {
        $(".box_x4 #information").html("InventoryManager.Badges().html();");
        $(".box_x4 #bar #badges").css({"background" : " #ECEAE0", "border-left" : " 2px solid #FFF", "border-right" : " 2px solid #FFF", "border-top" : " 2px solid #FFF", "box-shadow" : " 0px 0px 0px 2px #000", "margin-right" : " -2px", "padding-left" : " 4px", "padding-right" : " 4px"});
        $(".box_x4 #bar #rentables").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 6px", "padding-right" : " 6px"});
        $(".box_x4 #bar #pets").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 6px", "padding-right" : " 6px"});
        $(".box_x4 #bar #furnitures").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 6px", "padding-right" : " 6px"});
        $(".box_x4 #bar #bots").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 6px", "padding-right" : " 6px"});
    }
    else if(id == "bots") {
        $(".box_x4 #information").html("InventoryManager.Bots().html();");
        $(".box_x4 #bar #bots").css({"background" : " #ECEAE0", "border-left" : " 2px solid #FFF", "border-right" : " 2px solid #FFF", "border-top" : " 2px solid #FFF", "box-shadow" : " 0px 0px 0px 2px #000", "margin-right" : " -2px", "padding-left" : " 4px", "padding-right" : " 4px"});
        $(".box_x4 #bar #rentables").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 6px", "padding-right" : " 6px"});
        $(".box_x4 #bar #pets").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 6px", "padding-right" : " 6px"});
        $(".box_x4 #bar #badges").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 6px", "padding-right" : " 6px"});
        $(".box_x4 #bar #furnitures").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 6px", "padding-right" : " 6px"});
    }
}

var footer_right_toggle = 0;

window.onload = function(){
    $(".box_x1").draggable({
        handle: '#header',
        scroll: false
    });

    $(".box_x3").draggable({
        handle: '#header',
        scroll: false
    });

    $(".box_x4").draggable({
        handle: '#header',
        scroll: false
    });

    //Logout//
    $(".purse #logout").click(function () {
        window.location = "http://localhost/files/extension.php?logout=true";
    });
    //End of Logout//

    //Footer Friends//
    
    $("#collpase_right").click(function () {
        if(footer_right_toggle == 0) {
            $(".friends").hide();
            $("#collpase_right").css("background", " url('./files/images/other/sprites.png') -42px -113px");
            footer_right_toggle = 1;
        }
        else {
            $(".friends").show();
            $("#collpase_right").css("background", " url('./files/images/other/sprites.png') -14px -113px");
            footer_right_toggle = 0;
        }
    });

    $("#manage_friends").mouseover(function () {
        $("#manage_friends").css("margin-right", "12px");
        $("#manage_friends").css("margin-top", "4px");
    });
    $("#manage_friends").mouseout(function () {
        $("#manage_friends").css("margin-right", "10px");
        $("#manage_friends").css("margin-top", "4px");
    });
    //End of Footer Friends//

    //Help//
    $(".purse #help").click(function () {
        if($(".box_x2").css("display") == "none")
            $(".box_x2").show();
        else
            $(".box_x2").hide();
    });
    $(".box_x2").draggable({
        handle: '#header',
        scroll: false
    });
    $("#button1").click(function () {
        $("#button1").hide();
        $("#button2").hide();
        $("#button3").hide();
        $("#button1_").show();
        $("#button2_").show();
        $("#button3_").show();
        $("#button4_").show();
    });
    $("#button4_").click(function () {
        $("#button1").show();
        $("#button2").show();
        $("#button3").show();
        $("#button1_").hide();
        $("#button2_").hide();
        $("#button3_").hide();
        $("#button4_").hide();
    });
    $("#button2").click(function () {
        if(roomvisits == 0) {
            $(".box_x3 #header #title").html("Error");
            $(".box_x3 #information").html("You cannot submit a call for help without chatting first!");
            $(".box_x3").show();
        }
    });
    $("#button3").click(function () {
        $(".box_x3 #header #title").html("Error");
        $(".box_x3 #information").html("The Customer Support Center do not exist yet!");
        $(".box_x3").show();
    });
    //End of Help//

    //Purse//
    $(".diamonds").mouseover(function(){
        $("#diamonds").css("background", " url('./files/images/other/sprites.png') 0px -15px");
        $("#diamonds_amount").css("color", " #84FEFE");
    });
    $(".diamonds").mouseout(function(){
        $("#diamonds").css("background", " url('./files/images/other/sprites.png') 0px 0px");
        $("#diamonds_amount").css("color", " #35C1E0");
    });

    $(".credits").mouseover(function(){
        $("#credits").css("background", " url('./files/images/other/sprites.png') -15px -15px");
        $("#credits_amount").css("color", " #FEFB6E");
    });
    $(".credits").mouseout(function(){
        $("#credits").css("background", " url('./files/images/other/sprites.png') -15px 0px");
        $("#credits_amount").css("color", " #D4AE21");
    });

    $(".pixels").mouseover(function(){
        $("#pixels").css("background", " url('./files/images/other/sprites.png') -30px -15px");
        $("#pixels_amount").css("color", " #FED3FE");
    });
    $(".pixels").mouseout(function(){
        $("#pixels").css("background", " url('./files/images/other/sprites.png') -30px 0px");
        $("#pixels_amount").css("color", " #CD81CD");
    });
    // End of Purse //

    // Inventory //
    $("#inventory").click(function () {
        $(".box_x4").show();
    });
    // End of Inventory //
};