var logFile = [d.toUTCString()+" Start"];
var $counter = 0;

$( document ).ready(function() {
	
	setTimeout(Timer, 500);
  
//var querystring = require('querystring');

	
});

$("div").mousemove(function( event ) {
	  var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
	  $( "span" ).text( "(X, Y) : " + pageCoords );
	  logFile.push(d.toUTCString()+"(X, Y) : " + pageCoords);
	  
});	
			
$("#target").mousedown(function() {
		  $counter++;
		  $("p").text(" Clicks: "+$counter);
		  Log("Clicks " + $counter);
});

var Log = function(dataLog){
	var d = new Date();
	logFile.push(d.toUTCString()+dataLog);
}

function Timer(arg) {
	var copy = [];
	arg.logFile.forEach(function(item){
	copy.push(item)
	});
	console.log(copy);
 }
  
