$(document).ready(function () {
    $("#erreur_inscription").hide()

    $("#inscription_form").submit(function (e) {
        e.preventDefault()

        var email=$("#email_inscription").val();
        var mdp = $("#mdp_inscription").val();
        var mdpConf=$("#mdp_confirmation").val();
        console.log(email+" "+mdp+" "+mdpConf);

        if(email!='tina@esi.dz' && mdp==mdpConf)  window.location.replace("file:///E:/IHMPrototype/go-travel/inscriptioninfo.html");
        else {
            if(email=='tina@esi.dz')  $("#erreur_inscription").text('Cette adresse email existe déjà');
            else  $("#erreur_inscription").text('Vos mots de passe ne correspondent pas');
            $("#erreur_inscription").show();
        }
    });

    $("#annuler_inscription").click(function () {
        window.location.replace("file:///E:/IHMPrototype/go-travel/index.html");
    })
});
