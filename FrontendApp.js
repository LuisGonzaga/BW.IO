var d = new Date();
var logFile = [];
var inputMetrics = "";
var $counter = 0;

$( document ).ready(function() {
	logFile.push("Start - " + d.toISOString());
	$("div").mousemove(function( event ) {
		$( "span" ).text( "(X, Y) : " + "(" + event.pageX + ", " + event.pageY + ")" );
		var logText = "(X, Y) : " + "(" + event.pageX + ", " + event.pageY + ")";
	  //   if(logFile[logFile.length-1] != (d.toISOString()+ " - " + logText))
	  //   		Log("(X, Y) : " + "(" + event.pageX + ", " + event.pageY + ")");
		
  	});	 
  
	$("#target").mousedown(function() {
				$counter++;
				$("p").text(" Clicks: "+$counter);
	})
	//setTimeout(Log(logFile), 500);
});

function Log(dataLog){	
	logFile.push(d.toISOString()+ " - " + dataLog);
	Logging(logFile);
	logFile.length = 0;
}

function Logging(inputedLog){
	$.ajax({
            url: '/Node/getEndpoint.js',
            method: 'GET',
            contentType: 'text/html; charset=UTF-8',
            success: function (inputedLog, status){                
				inputMetrics = inputedLog;  
				//To do what?
				console.log(inputedLog); 
			}
			,
            error: function (status){
                console.log(status);
            	alert("failed connection, please try again later")
            }
		});
	}