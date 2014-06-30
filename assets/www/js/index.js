function hideall() {
	$('#home').css('visibility','hidden');
	$('#chat').css('visibility','hidden');
	$('#about').css('visibility','hidden');
	$('#loading').css('visibility','hidden');
}

var app = {
    	initialize: function() {
    		hideall();
    		$('#home').css('visibility','visible');
        	$("#link_chat").click(function(){
        		hideall();
            		$('#chat').css('visibility','visible');
            		return false;
        	});
		$("#link_home").click(function(){
			hideall();
	            	$('#home').css('visibility','visible');
        	    	return false;
        	});
	},
};
