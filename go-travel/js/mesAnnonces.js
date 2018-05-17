var parentNode;
var annonce;
$(document).ready(function(){
    parentNode = $("div.container:eq(3)").toArray()[0];
   // console.log(parentNode);
    $("#successDelete").hide();
});
function addAnnonce() {
    console.log("hey");
}

function deleteAnnonce(index) {
    // console.log("hey");
    annonce = index.parentElement.parentElement.parentElement.parentElement.parentElement;
    //console.log(annonce);
    showNote(annonce);
}

    function showNote() {
        $("#notification_container").fadeIn("slow");
        $(".dismiss").click(function(){
            $("#notification_container").fadeOut("slow");
        });
        $(".accepte").click(function(){
           // console.log(annonce);
            parentNode.removeChild(annonce);
            $("#notification_container").fadeOut("slow");
            var nodes = $("div.container:eq(3) div.card");
            if (nodes.length == 0) {
                var div = document.createElement('div');
                div.innerHTML = '<div class="card row" style="padding: 100px; background-color: white; ' +
                    'color: #2d2d2d; height: 100%; text-align: center; font-size: large;">Vous n\'avez aucune Annonce</div>';
                parentNode.appendChild(div);
            }
            $("#successDelete").fadeTo(2000, 500).slideUp(500, function(){
                $("#successDelete").slideUp(700);
            });
        });
    }



