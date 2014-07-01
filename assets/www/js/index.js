function hideall() {
	$('#home').css('display','none');
	$('#chat').css('display','none');
	$('#help').css('display','none');
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
        	$("#link_help").click(function(){
			hideall();
	            	$('#help').css('display','initial');
        	    	return false;
        	});
        	$("#prelist").click(function(){
        		loadplayers();
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
