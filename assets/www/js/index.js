var app = {
    initialize: function() {
        $("a").click(function(){
            if (event.target.data( "navi" ) === "yes") {
                $('#page').load('inc/'+event.target.data( "url" )+'.html');
            }
            return false;
        });
    },
};
