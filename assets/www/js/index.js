var app = {
    initialize: function() {
        $("#link_chat").click(function(){
            $('#page').load('inc/chat.html');
            return false;
        });
    },
};
