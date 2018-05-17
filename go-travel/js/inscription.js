$(document).ready(function () {
    $("#erreur_inscription").hide()

    $("#inscription_form").submit(function (e) {
        e.preventDefault()

        var email=$("#email_inscription").val();
        var mdp = $("#mdp_inscription").val();
        var mdpConf=$("#mdp_confirmation").val();
        console.log(email+" "+mdp+" "+mdpConf);

        if(email!='tina@esi.dz' && mdp==mdpConf)  window.location.replace("inscriptioninfo.html");
        else {
            if(email=='tina@esi.dz')  $("#erreur_inscription").text('Cette adresse email existe déjà');
            else  $("#erreur_inscription").text('Vos mots de passe ne correspondent pas');
            $("#erreur_inscription").show();
        }
    });

    $("#annuler_inscription").click(function () {
        window.location.replace("index.html");
    });

    $("#inscription_info").submit(function (e) {
        e.preventDefault()
        window.location.replace("index_logged.html");
    });

    $("#annuler_info").click(function () {
        window.location.replace("index.html");
    })

    $("#photo_profil").click(function () {
        $("#url_photo").trigger('click');
    });


    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#photo_profil').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#url_photo").change(function(){
        readURL(this);
    });
});
