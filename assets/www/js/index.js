var app = {
    initialize: function() {
        $(document).bind('touchmove', function(e) {
        	e.preventDefault();
        });
        $("#link_chat").click(function(){
            $('#page').load('inc/chat.html');
            return false;
        });
    },
};
