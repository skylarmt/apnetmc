function hideall() {
	$('#home').css('visibility','hidden');
	$('#chat').css('visibility','hidden');
	$('#about').css('visibility','hidden');
}

var app = {
    	initialize: function() {
    		$('#loading').css('visibility','hidden');
        	$("#link_chat").click(function(){
        		hideall();
            		$('#chat').css('visibility','visible');
            		return false;
        	});
		$("#link_home").click(function(){
			hideall();
	            	$('#chat').css('visibility','visible');
        	    	return false;
        	});
	},
};
