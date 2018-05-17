var parentNode;
var annonce;
$(document).ready(function(){
    parentNode = $("div.container:eq(3)").toArray()[0];
   // console.log(parentNode);
});
function addAnnonce() {
    console.log("hey");
}

function deleteAnnonce(index) {
    // console.log("hey");
    annonce = index.parentElement.parentElement.parentElement.parentElement.parentElement;
    //console.log(annonce);
    showNote(annonce);
    var nodes = $("div.container:eq(3) div.card");
    console.log(nodes);
    if (nodes.length == 1) {
        var div = document.createElement('div');
        div.innerHTML = '<div class="card row" style="padding: 100px; background-color: white; ' +
            'color: #2d2d2d; height: 100%; text-align: center; font-size: large;">Vous n\'avez aucune Annonce</div>';
        parentNode.appendChild(div);
    }
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
        });
    }



