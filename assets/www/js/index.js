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

$("#ircchat").dunirc({
      server: "ws://107.170.202.223:8089",
      nick: "",
      channel: "#minecraft",
      userlist: "userlist",
      content: "content",
      msg: ".msg",
      topic: "topic",
      scroll: true
  });
