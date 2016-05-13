<?php
 function ts3_ss(){
   try {
     $ts3_status = file_get_contents("http://vps.mirecki.info/server_status/ts3.php");
   } catch (Exception $e){
     $ts3_status = "offline";
   }
   $output = $ts3_status;
   return $output;
 }

function mumble_ss(){
  try{
    $mumble_status = file_get_contents("http://vps.mirecki.info/server_status/mumble.php");
  }catch (Exception $e) {
    $mumble_status = "offline";
  }

  $output = $mumble_status;
 	return $output;
 }
?>
