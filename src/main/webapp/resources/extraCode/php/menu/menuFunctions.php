<?php
function retrievePermissions($userName){
	require ('../db/db.php');
	
	$sqlQuery = "SELECT p.menu_id menuId FROM user u";  // get id from menu table
	$sqlQuery .= "INNER JOIN permissions p ON u.groups_id = p.groups_id";
	$sqlQuery .= "INNER JOIN menu m ON p.menu_id = m.id";
	$sqlQuery .= "WHERE u.username = '$userName'";
	$permissions = [];
	if ($resultDb = $mysqli->query($sqlQuery)){  
		while ($user = $resultDb->fetch_assoc()){  // create an array with menu id 
			$permissions[] = $user['menuId'];
		}
	}
	
	$mysqli->close();
	return $permissions;
}

function retrieveModules($permissions){
	require ('../db/db.php');
	$inClause = '(' .join(',',$permissions).')';  // return a tring with all the array values separated by ",",concatenate with"()"
	$sqlQuery = "SELECT id, text, iconCls FROM menu WHERE menu_id IS NULL AND id in $inClause";  //#16
	$modules =[];
	if($resultDb = $mysqli->query($sqlQuery)){
		while ($module = $resultDb->fetch_assoc()){
			$modules[] = $module;
		}
	}
	$mysqli->close();
	return $modules;
};

function retrieveMenuOptions($modules, $permissions){
	require ('../db/db.php');
	$inClause='('.join(',',$permissions).')';  // need the id of the module and the permissions
	$result = [];
	foreach($modules as $module){  // for each module user has access to
		$sqlQuery = "SELECT * FROM menu WHERE menu_id = '";
		$sqlQuery .= $module['id'] ."'AND id in $inClause";
		if($resultDb = $mysqli->query($sqlQuery)){
			$count = $resultDb->num_rows;  // retrieve the number of records
			if($count >0){
				$module['items'] = array(); 
				while($item= $resultDb->fetch_assoc()){
					$module['items'][] = $item;  //  fetch each item adding it to 'items'
					//each $item inside module['items'] represent the TreeNode model
				}
			}
			$result[] = $module;
		}
	}
	$mysqli->close();
	return $result;
}