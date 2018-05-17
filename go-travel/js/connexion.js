$(document).ready(function () {
    $("#erreur").hide()

    $("#email_connexion").focus(function(){
        $("#erreur").hide();
    });
    $("#mot_de_passe_connexion").focus(function () {
        $("#erreur").hide();
    });
    $("#connexion_form").submit(function (e) {
        e.preventDefault();
        var email=$("#email_connexion").val();
        var mdp = $("#mot_de_passe_connexion").val();

        if(email=='tina@esi.dz' && mdp=='tina')  window.location.replace("index_logged.html");
        else {$("#erreur").text('Utilisateur ou mot de passe incorrect');
        $("#erreur").show();
        }
    });
});
