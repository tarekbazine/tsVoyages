$(document).ready(function(){
    $("#enterComment").on('keyup', function (e) {
        if (e.keyCode == 13 && $(this).val()!="") {
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
  $("#formulaireAjout").submit(function(e) {
    e.preventDefault();
});

});

function holdForm(){
    $("#dateDebut").removeClass("error");
    $("#dateFin").removeClass("error");
    debut=$("#formulaireAjout input[placeholder=\"Date début\"]").val();
    fin=$("#formulaireAjout input[placeholder=\"Date fin\"]").val();
    d=new Date();
    arrayDebut=debut.split("-");
    arrayFin=fin.split("-");
    d.setFullYear(arrayDebut[0],arrayDebut[1],arrayDebut[2]);
    df=new Date();
    df.setFullYear(arrayFin[0],arrayFin[1],arrayFin[2]);
    if(df>d){
        $("#successAdd").fadeTo(2000, 500).slideUp(500, function(){
            $("#successAdd").slideUp(700);
        });
        $("#formulaireAjout")[0].reset();
       location.href='MesAnnonces.html';
    }
    else {
       $("#failAdd").fadeTo(2000, 500).slideUp(500, function(){
        $("#failAdd").slideUp(1000);
    });
       $("#dateDebut").addClass("error");
       $("#dateFin").addClass("error");
    }
}
