<?php
session_start();  // resume the current session
$_SESSION = array();  // unset all of the session variables
session_destroy();  // destroy the session
$result = array();  // send the information back to extjs
$result['success'] = true;
$result['msg'] = 'logout';
echo json_encode($result);