<?php
include 'php/server_status.php';

switch($_POST['cname']){
	case "motd":
		$output = file_get_contents("content/motd");
		echo $output;
	break;
	
	case "help":
		$output = file_get_contents("content/help");
		echo $output;
	break;

	case "aboutme":
		$output = file_get_contents("content/aboutme");
		echo $output;
	break;
	case "projects":
		$output = file_get_contents("content/projects");
		echo $output;
	break;
	case "server_status":
		$ts3_status = ts3_ss();
		$mumble_status = mumble_ss();
		include 'content/server_status';
		echo $output;
	break;
}

?>
