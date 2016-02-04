<?php

$menu = [];
$menu[]["title"] = "Menu1";
$menu[]["title"] = "Menu2";
$menu[]["title"] = "Menu3";

$i = 0;
foreach ($menu as $key =>$value){
	$menu[$key]["items"]["xtype"] = "treepanel";
	$menu[$key]["items"]["expanded"] = true;
	$menu[$key]["items"]["rootVisible"] = false;
	$menu[$key]["items"]["border"] = 0;
	$menu[$key]["items"]["root"]["children"][0]["text"] = "Leaf Menu1";
	$menu[$key]["items"]["root"]["children"][0]["leaf"] = true;
	$menu[$key]["items"]["root"]["children"][1]["text"] = "Leaf Menu2";
	$menu[$key]["items"]["root"]["children"][1]["leaf"] = true;
	$menu[$key]["items"]["root"]["children"][2]["text"] = "Leaf Menu3";
	$menu[$key]["items"]["root"]["children"][2]["leaf"] = true;
	$menu[$key]["items"]["root"]["children"][3]["text"] = "Leaf Menu4";
	$menu[$key]["items"]["root"]["children"][3]["leaf"] = true;
	++$i;
}

echo json_encode($menu);
?>