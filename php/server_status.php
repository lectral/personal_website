<?php
 function ts3_ss(){
 	$ts3_status = file_get_contents("http://vps.mirecki.info/server_status/ts3.php");
 	$output = $ts3_status;
 	return $output;
 }

  function mumble_ss(){
 	$mumble_status = file_get_contents("http://vps.mirecki.info/server_status/mumble.php");
 	$output = $mumble_status;
 	return $output;
 }
?>