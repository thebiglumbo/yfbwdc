/call Oauth flow .php script
(function() {
	var promise = $.getJSON("/phptst.php");
                promise.done(function(data) {
                console.log(data);
                window.alert("a message");
                window.alert(data);
// this will attempt to return token,secret,session
        });

$(document).ready(function () {
    $("#submitButton").click(function () {
 });
});

