$(document).ready(function(){
    //Scroll elementos Menu

    var acercaDe = $('#acerca-de').offset().top,
        trabajo = $('#trabajos').offset().top,
        contacto = $('#contacto').offset().top;

    $('#acerca').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 380
        }, 500);
    })

    $('#trabajo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: trabajo
        }, 500);
    })

    $('#contactos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto
        }, 500);
    })

});