var app = {
    initialize: function() {
        $("#link_chat").click(function(){
            $('#page').load('inc/chat.html');
            return false;
        });
		$("#link_home").click(function(){
            window.location.reload();
            return false;
        });
		},
};
