//Constants
const cHost = "visitor@mirecki.info";
const endSign = "$";
const promptChar = "_"
const promptSign = "<span class=\"blink\">"+promptChar+"</span>";
//Varibles
var lineCount= 1;
var wordCount = 0;
var cliLocation="~";
var inputString='';
var command='';
var params='';


//Functions start

//This function prevent Chrome browser from returning to previous website on backspace button.
$(document).keydown(function(e){
   e.preventDefault();
});

function scrollme(){
	dh=document.body.scrollHeight
	ch=document.body.clientHeight
	if(dh>ch){
		moveme=dh-ch
		window.scrollTo(0,moveme)
	}
}



function getPrompt(){
	return cHost+" :"+cliLocation+endSign+' ';
}

function getCurrentLine(){
	return "#"+id
}

//Connects to php handler to get content
function get_content(pName,id){
	$.post("content_handler.php",{cname: pName},function(data){
		var output = data.replace('\n',"<br>");
		$(id).append("<div=\""+pName+"\>"+output+"</div>");
	});
}

$(document).ready(function(){
	$.ajaxSetup({async:false});
	$.ajaxSetup({cache:false});
	get_content("motd",'.output');
	$('.output').append("<div id=\"1\">\n"+getPrompt()+promptSign);
	
});

//Commands
function command_default(){
	$("#"+lineCount).append(inputString+" : command not found");
}

function command_clear(){
	location.reload();
}

function command_help(){
	get_content("help","#"+lineCount);
}

function command_aboutme(){
	get_content("aboutme","#"+lineCount);
}

function command_projects(){
	get_content("projects","#"+lineCount);
}

function command_status(){
	get_content("server_status","#"+lineCount);
}

function command_echo(par){
	$("#"+lineCount).append(par);
}
//Commands end

//Commend register
function checkCommand(){
		switch(command){
			case "": break;
			case "clear": 		command_clear(); 	break;
			case "help":  		command_help();		break;
			case "aboutme": 	command_aboutme(); 	break;
			case "projects": 	command_projects(); break;
			case "server-status": 	command_status(); break;
			case "echo": 		command_echo(params); break;
			default: 			command_default(); 	break;
}
}

function parseCommand(inputString){
	var output = inputString.split(' ');	
    command = output[0];
    params = output[1];
    checkCommand();
}



//Input handling
function enter(){
		$("#"+lineCount).append("\n</div><br>\n");
		parseCommand(inputString);
		var value = $("#"+lineCount).html();
		value = value.replace(promptChar,"");		
		$("#"+lineCount).html(value);
		lineCount++;		
		$('.output').append("<div id=\""+lineCount+"\">"+getPrompt());
		wordCount=0;
		inputString='';
		scrollme();
}

function printChar(input){
		var value = $("#"+lineCount).text();				
		value = value.replace(promptChar,"");
		$("#"+lineCount).html(value);		
		$("#"+lineCount).append(input+promptSign);
		$('.blink').blink();
		inputString+=input;
		wordCount++;
}

function deleteChar(){
	var value = $("#"+lineCount).text();		
		if(wordCount>0){			
			value = value.replace(/._/,"");
			$("#"+lineCount).html(value+promptSign);
			wordCount--;
		}
		inputString = inputString.slice(0, -1)
}

