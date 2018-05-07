$(document).ready(function(){
    $("#enterComment").on('keyup', function (e) {
        if (e.keyCode == 13) {
            var d = new Date();

            var month = d.getMonth()+1;
            var day = d.getDate();

            var output =day+"-"+month+"-"+ d.getFullYear()+" "+d.getHours()+":"+d.getMinutes();
            var text="<div class=\"row\"><img src=\"https://randomuser.me/api/portraits/women/90.jpg\" id=\"image-rounded-comment\"/><div class=\"name-comment col-md-8 \"><h4>Lila BOUALILI</h4></div></div><ul class=\"list-inline\"> <li class=\"list-inline-item\"><i class=\"icon-star\"></i><i class=\"icon-star\"></i><i class=\"icon-star\"></i><i class=\"icon-star\"></i><i class=\"icon-star\"></i></li><li class=\"list-inline-item\"><span>"+output+"</span></li><li><p>"+$(this).val()+"</p></li>";
            $(text).insertAfter( "#CommentUser" );
            $(this).val("");
        }
    });
  $("#categorie li a").click(function(){
       $("a.selectedCat").removeClass("selectedCat");
        $(this).addClass("selectedCat");
  });
});
