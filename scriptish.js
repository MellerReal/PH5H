/**
 * Created by nosa0707 on 2016-11-28.
 */
/* Fake "packets" id's;

 box_x1 - Box #1 - Username Logon
 box_x2 - Box #2 - Help
 box_x3 - Box #3 - Custom Error
 box_x4 - Box #4 - Inventory
 box_x5 - Box #5 - Navigator
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

function InventoryManagerPlaneInRoom() {
    $(".box_x3 #information").html("You're not in any room!");
    $(".box_x3").show();
}

function RoomManager(id) {
    if(id == "minimize_all") {
        if(navigator_all_toggle == 0)
            navigator_all_toggle = 1;
        else
            navigator_all_toggle = 0;
        RoomManager("all"); //Refresh
    }
    else if(id == "minimize_games") {
        if(navigator_games_toggle == 0)
            navigator_games_toggle = 1;
        else
            navigator_games_toggle = 0;
        RoomManager("all"); //Refresh
    }
    else if(id == "public") {
        $(".box_x5 #information").load("./files/extension.php?nav_publics=true");
        $(".box_x5 #bar #furnitures").css({"background" : " #ECEAE0", "border-left" : " 2px solid #FFF", "border-right" : " 2px solid #FFF", "border-top" : " 2px solid #FFF", "box-shadow" : " 0px 0px 0px 2px #000", "margin-right" : " -2px", "padding-left" : " 8px", "padding-right" : " 8px"});
        $(".box_x5 #bar #rentables").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 12px", "padding-right" : " 12px"});
        $(".box_x5 #bar #pets").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 12px", "padding-right" : " 12px"});
        $(".box_x5 #bar #badges").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 12px", "padding-right" : " 12px"});
    }
    else if(id == "all") {
        $(".box_x5 #information").load("./files/extension.php?nav_all=" + navigator_all_toggle + navigator_games_toggle);
        $(".box_x5 #bar #rentables").css({"background" : " #ECEAE0", "border-left" : " 2px solid #FFF", "border-right" : " 2px solid #FFF", "border-top" : " 2px solid #FFF", "box-shadow" : " 0px 0px 0px 2px #000", "margin-right" : " -2px", "padding-left" : " 8px", "padding-right" : " 8px"});
        $(".box_x5 #bar #furnitures").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 12px", "padding-right" : " 12px"});
        $(".box_x5 #bar #pets").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 12px", "padding-right" : " 12px"});
        $(".box_x5 #bar #badges").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 12px", "padding-right" : " 12px"});
    }
    else if(id == "events") {
        $(".box_x5 #information").html("RoomManager.Events().html();");
        $(".box_x5 #bar #pets").css({"background" : " #ECEAE0", "border-left" : " 2px solid #FFF", "border-right" : " 2px solid #FFF", "border-top" : " 2px solid #FFF", "box-shadow" : " 0px 0px 0px 2px #000", "margin-right" : " -2px", "padding-left" : " 8px", "padding-right" : " 8px"});
        $(".box_x5 #bar #rentables").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 12px", "padding-right" : " 12px"});
        $(".box_x5 #bar #furnitures").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 12px", "padding-right" : " 12px"});
        $(".box_x5 #bar #badges").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 12px", "padding-right" : " 12px"});
    }
    else if(id == "my") {
        $(".box_x5 #information").html("RoomManager.My().html();");
        $(".box_x5 #bar #badges").css({"background" : " #ECEAE0", "border-left" : " 2px solid #FFF", "border-right" : " 2px solid #FFF", "border-top" : " 2px solid #FFF", "box-shadow" : " 0px 0px 0px 2px #000", "margin-right" : " -2px", "padding-left" : " 8px", "padding-right" : " 8px"});
        $(".box_x5 #bar #rentables").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 12px", "padding-right" : " 12px"});
        $(".box_x5 #bar #pets").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 12px", "padding-right" : " 12px"});
        $(".box_x5 #bar #furnitures").css({"background" : " #C3C2B8", "border-left" : " 1px solid #4D4C49", "border-right" : " 1px solid #4D4C49", "border-top" : " 1px solid #4D4C49", "box-shadow" : " 0px 0px 0px 0px #000", "margin-right" : " -4px", "padding-left" : " 12px", "padding-right" : " 12px"});
    }
}

function InventoryManager(id) {
    if(id == "furni") {
        $(".box_x4 #information").load("./files/extension.php?furnitures=true");
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
var inventory_selected = 0;
var navigator_all_toggle = 0;
var navigator_games_toggle = 0;

function ItemManager(id, that) {
    //alert("Inventory.ItemManager(" + id.toString() + ");");
    if(id != inventory_selected) {
        $(that).css({"margin-right":" 2px", "margin-bottom":" 2px", "background": " url('./files/images/other/hold_sprite.png') -40px 0px", "width": " 42px", "height": " 42px"});
        var last = document.getElementsByClassName(inventory_selected.toString());
        $(last).css({"margin-right":" 4px", "margin-bottom":" 4px", "background": " url('./files/images/other/hold_sprite.png') 0px 0px", "width": " 40px", "height": " 40px"});
        inventory_selected = id;

        $(".box_x4 #information #item_data").load("http://localhost/files/extension.php?furnidata=" + inventory_selected.toString());
    }
}

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

    $(".box_x5").draggable({
        handle: '#header',
        scroll: false
    });

    $(".box_x6").draggable({
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

    // Navigator //
    $("#navigator").click(function () {
        $(".box_x5").show();
    });
    // End of Navigator //
};

function SendPacket(mymessage) {
    var myname = usrnme; //get user name

    if(myname == ""){ //empty name?
        alert("Name empty");
    }

    if(mymessage.substring(0, 11) == "RoomManager") {
        if(mymessage.substring(12, 21) == "EnterRoom") {
            console.log("DEBUG: Attempting to enter room..");
            var splits = mymessage.split("(");
            var res = splits[1];
            var splits = res.split(")");
            var roomid = splits[0];
            $.get('./files/extension.php?room_data=' + roomid,function(data) {
                var splits = data.split("owner=");
                var res = splits[1];
                var splits = res.split(";");
                var room_owner = splits[0];
                console.log("DEBUG: Room owner " + room_owner + ".");
                var splits = data.split("actives=");
                var res = splits[1];
                var splits = res.split(";");
                var room_actives = splits[0];
                console.log("DEBUG: Room actives " + room_actives + ".");
                var splits = data.split("max=");
                var res = splits[1];
                var splits = res.split(";");
                var room_max = splits[0];
                console.log("DEBUG: Room max " + room_max + ".");
                var splits = data.split("status=");
                var res = splits[1];
                var splits = res.split(";");
                var room_status = splits[0];
                console.log("DEBUG: Room status " + room_status + ".");
                var splits = data.split("title=");
                var res = splits[1];
                var splits = res.split(";");
                var room_title = splits[0];
                console.log("DEBUG: Room title " + room_title + ".");

                if(room_status == 1) {
                    console.log("DEBUG: Room is locked, please knock.");
                    $(".box_x5").hide();
                    $(".box_x6").show();
                    $(".box_x6 #information").html(room_title + "<p>This room is locked. You need to ring the<br>doorbell to enter.</p>");
                    return;
                }

                if(room_status == 2) {
                    console.log("DEBUG: Room is password locked, please knock.");
                    return;
                }

                if(room_status == 0) {
                    console.log("DEBUG: Room is unlocked, entering..");
                    $(".box_x5").hide();
                    SendPacket("RoomManager.ProceedRoom(" + roomid + ");");
                    return;
                }
            });
        }
    }

    //prepare json data
    mymessage = myname + "." + mymessage;
    var msg = {
        name : myname,
        message: mymessage,
        color : '<?php echo $colours[$user_colour]; ?>'
    };
    //convert and send data to server
    websocket.send(JSON.stringify(msg));
};

$(document).ready(function(){
    //create a new WebSocket object.
    var wsUri = "ws://localhost:9000/demo/server.php";
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(ev) { // connection is open
        //$('#message_box').append("<div class=\"system_msg\">Connected!</div>"); //notify user
        //alert("DEBUG: Connected with PHP Websockets");
        console.log("DEBUG: Connected with PHP websockets.");
    }
    websocket.onmessage = function(ev) {
        var msg = JSON.parse(ev.data); //PHP sends Json data
        var umsg = msg.message; //message text
        if (umsg.substring(0, 1) == ":") {
            if(umsg.substring(1, 4) == "ha ") {
                    //$(".box_x2").show();
            }
        }
        //else
        //$('#message_box').append("<div><span class=\"user_name\" style=\"color:#"+ucolor+"\">"+uname+"</span> : <span class=\"user_message\">"+umsg+"</span></div>");
    };

    websocket.onerror	= function(ev){
        $(".disconnected").show();
    };
    //websocket.onclose 	= function(ev){$('#button2').click();};
});