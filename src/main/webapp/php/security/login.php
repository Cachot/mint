<?php
ini_set('display_error','1');
error_reporting(E_ALL);

require ("../db/db.php");  // connect to the database
require ("PassHash.php");  // this file contains the check_password method

session_start();  // will store the username on the session later

$userName = $_POST['user'];  // get the value submitted by form
$pass = $_POST['password']; 

$userName = stripslashes($userName);  // remove the backslashes from the given string
$pass = stripslashes($pass);  

$userName = $mysqli->real_escape_string($userName);  // escapes special characters in string
$sql = "SELECT * FROM USER WHERE userName = '$userName'"; 

if ($resultDb = $mysqli->query($sql)){  //#10
	$count = $resultDb->num_rows;  // whether the result set returned any rows 
	if($count==1){  // passed username and result return set be 1
		$record = $resultDb->fetch_assoc();  // get the information from the database
		
		//for decrypting the hashed password, for comparing with entered password
		if (PassHash::check_password($record['password'],$pass)){
			$_SESSION['authenticated'] = "yes"; 
			$_SESSION['username'] = $userName; 
			$result['success'] = true; 
			$result['msg'] = 'User authenticated!';
		} else{
			$result['success'] = false;
			$result['msg'] = 'Incorrect password.';
		}
	}else{
		$result['success'] = false;  // if the username doesn't exist in the database
		$result['msg'] = 'Incorrect user or password.'; 
	}
	$resultDb->close(); 
}
$mysqli->close();
echo json_encode($result); // encode the result, send back to Extjs in JSON format
?>