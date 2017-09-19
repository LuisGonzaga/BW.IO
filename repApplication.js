function handleRequest(request, response){
    var another = require('Node/logMetrics.js');
    function displayLogging(){
        $.ajax({
                url: '/Node/logMetrics.js/logPost',
                method: 'GET',
                contentType: 'text/html; charset=UTF-8',
                success: function (response, status){                
                    var json = $.getJSON("'/Node/clicksMouse.log");                    
                    $("span").add(json);
                }
                ,
                error: function (status){
                    console.log(status);
                    alert("failed connection, please try again later")
                }
            });
        }
    
}
