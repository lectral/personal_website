<?php

$chars = array("1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
foreach ($chars as &$value){
  $tmp = strtolower($value);
  echo "\n$(document).bind('keystrokes', { \n";
	echo "  keys: ['$tmp']\n";					
	echo " }, function(event){\n";
	echo "	  printChar(\"$tmp\");\n";
	echo "});\n";
}


?>
