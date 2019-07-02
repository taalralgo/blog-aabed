$(document).ready(function () {
    $('#envoyer').click(function (e) {
        e.preventDefault();
        let prenom = $('#first-name').val();
        let nom = $('#nom').val();
        let email = $('#email').val();
        let objet = $('#objet').val();
        let tel = $('#phone').val();
        let message = $('#message').val();
        message+= "\nNom: "+nom+", Prénom: "+prenom+", Téléphone: "+tel;
        $.ajax({
            url: '/contact/envoyer',
            type: 'post',
            data: {prenom: prenom, nom: nom, email: email, objet: objet, tel: tel, message: message},
            dataType: 'json',
            success: function (data) {
                switch (data.status) {
                    case 'error':
                        Swal.fire({
                            type: 'error',
                            title: 'Erreur',
                            text: data.message,
                        });
                        break;
                    case 'success':
                        Swal.fire({
                            position: 'top-end',
                            type: 'success',
                            title: data.message,
                            showConfirmButton: false,
                            timer: 2500
                        });
                        break;
                    default:
                        swal("Erreur", data.message, "error");
                }
            },
            error: function (error) {
                alert('Erreur ' + error);
            }
        });
    })
});