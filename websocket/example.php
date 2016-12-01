<?php



class Game
{

	private $_config;
	private $_databaseManager;
	private $_catalogManager;
	private $_gameClientManager; // and so on


	__construct() // __construct function is automatically called to when creating the class, so init is not uhm necessay, but why do we use a different function Initialize? Well look at a CatalogManager, you sometimes want to reload it without restarting the hotel. Thats when you call the init function. Simple as that
	// Gotcha =dhan

	/// Well do with this what you want, i recommend re-writing it, do ask me questions if you get stuck, im gon work on me own emulator for now. good luck
	// Thanks for all the help, I appreciate it. 
	{
			// whilse constructing the game, which is the base of everything, we init everything, cata, db, everything. hold on, we gotta declare it first
			
			this._config = new Config(); // so this would work;
			_config.somefunctionInside();

	}

	__destruct()
	{

	}
// so how do other classes get to the config? like this

	public function GetConfig()
	{
		return this._config;
	}


}


class lol
{
	global $Game;
	// a ranodom class wants to get info from the config, like this:
	// game is the only uhm class that should be globally defined
	$Game.
}

class Config
{
	// here we get some details from a .ini, like a regular habbo emulator, sql details and so on
}

// you should make classes in seperate files, this is just an example

class DatabaseManager
{

	private $_connection;

	public function Initialize($host, $user, $pass, $db)
	{

		this._connection = new mysqli($host, $user, $pass, $db);
		if(this._connection === false)
		{
			// throw error
			die('error');
		}

	}

	public function GetQuery($query)
	{
		return this._connection.query($query);/
		/// How would I run the Initialize? 
	}

}



// this should all be in different foldfers and files, this would be your program.php

//program.php

$Game = new Game();



?>