<script type="text/javascript">
var Log = function(dataLog){
	var d = new Date();
	logFile.push(d.toUTCString()+dataLog);
}

// 	function Timer(arg) {
// 		var copy = [];
// 		arg.logFile.forEach(function(item){
// 		copy.push(item)
// 		});
// 		console.log(copy);
//   }
var $counter = 0;
$("#target").mousedown(function() {
		  $counter++;
		  $("p").text(" Clicks: "+$counter);
		  Log("Clicks " + $counter);
});

$("div").mousemove(function( event ) {
	  var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
	  $( "span" ).text( "(X, Y) : " + pageCoords );
	  //logFile.push(d.toUTCString()+"(X, Y) : " + pageCoords);
	  
});	
</script>
  
