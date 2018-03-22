

$(document).keydown(function(handle) {
	if((handle.keyCode>31) && (handle.keyCode<127 )){
	output = String.fromCharCode(handle.keyCode);
	output = output.toLowerCase()
	printChar(output);
	}else{
		switch (handle.keyCode){
			case 13: //enter functionality
				enter();
				break;
			case 8:
				deleteChar(); //backspace functionality
				break;
			case 189:
				printChar("-");
				break;
		}
	}
	
});

