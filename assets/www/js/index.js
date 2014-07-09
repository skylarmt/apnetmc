function hideall() {
	$('#home').css('display','none');
	$('#chat').css('display','none');
	$('#ircchat').css('display','none');
	$('#help').css('display','none');
	$('#news').css('display','none');
	$('#players').css('display','none');
	$('#loading').css('display','none');
}

var app = {
    	initialize: function() {
    		hideall();
    		$('#home').css('display','initial');
        	$("#link_chat").click(function(){
        		hideall();
            		$('#chat').css('display','initial');
            		return false;
        	});
		$("#link_home").click(function(){
			hideall();
	            	$('#home').css('display','initial');
        	    	return false;
        	});
        	$("#link_players").click(function(){
			hideall();
	            	$('#players').css('display','initial');
        	    	return false;
        	});
        	$("#link_news").click(function(){
			hideall();
	            	$('#news').css('display','initial');
        	    	return false;
        	});
        	$("#link_help").click(function(){
			hideall();
	            	$('#help').css('display','initial');
        	    	return false;
        	});
        	$("#link_irc").click(function(){
			hideall();
	            	$('#ircchat').css('display','initial');
        	    	return false;
        	});
        	$("#prelist").click(function(){
        		loadplayers();
        	    	return false;
        	});
        	$("#nrelist").click(function(){
        		loadnews();
        	    	return false;
        	});
        	$("#submitmsg").click(function(){
                	var clientmsg = encodeURIComponent(document.getElementById('usermsg').value);
                	var username = encodeURIComponent(document.getElementById('cusername').value);
                	if (username != '' && clientmsg != '') {
                	var xmlhttp;
			xmlhttp = new XMLHttpRequest();
			xmlhttp.open("GET", "http://apnetmc.tk/chat/apppost.php?name="+username+"&msg="+clientmsg, true);
			xmlhttp.send();
			document.getElementById('usermsg').value = "";
                	} else {
                		navigator.alert('Please fill in a username and a message.', null, 'Invalid input', 'OK');
                	}
                	return false;
        	});
	},
};

function loadplayers() {
var xmlhttp;
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("plist").innerHTML = xmlhttp.responseText;
        $("#plist").listview("refresh");
    }
}
xmlhttp.open("GET", "http://apnetmc.tk/query/view.php", true);
xmlhttp.send();
}

loadplayers();

function loadnews() {
var xmlhttp;
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("nlist").innerHTML = xmlhttp.responseText;
        $("#nlist").listview("refresh");
    }
}
xmlhttp.open("GET", "http://apnetmc.tk/news/index.php", true);
xmlhttp.send();
}

loadnews();

function loadLog(){
	var oldscrollHeight = $("#chatbox").attr("scrollHeight") - 20;
        $.ajax({
                url: "http://apnetmc.tk/chat/formatstrip.php?client=app",
                cache: false,
                success: function(html){
                        $("#chatbox").html(html); //Insert chat log into the #chatbox div
                        var newscrollHeight = $("#chatbox").attr("scrollHeight") - 20;
                        if(newscrollHeight > oldscrollHeight){
                                $("#chatbox").animate({ scrollTop: newscrollHeight }, 'normal'); //Autoscroll to bottom of div
        		}
                },
        });
}

setInterval (loadLog, 1500);
