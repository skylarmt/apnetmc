function hideall() {
	$('#home').css('display','none');
	$('#chat').css('display','none');
	$('#about').css('display','none');
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
	},
};
