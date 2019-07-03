$.ajax({
    url: '/article/last',
    type: 'get',
    dataType: 'json',
    success: function (data) {
        if (data) {
            console.log(data);
            $.each(data, function( index, value ) {
                if(index === 0) {
                    $('.titre1').text(value.title);
                    $('.content1').text(value.content);
                    $('.nbreComment1').text(value.nbreComment+" Commentaire(s)");
                    $('.date1').text(value.createdAt);
                }
                if(index === 1) {
                    $('.titre2').text(value.title);
                    $('.content2').text(value.content);
                    $('.nbreComment2').text(value.nbreComment+" Commentaire(s)");
                    $('.date2').text(value.createdAt);
                }
                if(index === 2) {
                    $('.titre3').text(value.title);
                    $('.content3').text(value.content);
                    $('.nbreComment3').text(value.nbreComment+" Commentaire(s)");
                    $('.date3').text(value.createdAt);
                }
            });
        }
        else {
            Swal.fire({
                position: 'top-end',
                type: 'error',
                title: "Une erreur est survenue",
                showConfirmButton: false,
                timer: 1500
            });

        }
    },
    error: function (error) {
        alert('Erreur ' + error);
    }
});