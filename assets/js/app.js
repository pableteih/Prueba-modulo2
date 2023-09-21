

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



$(document).ready(function (){

    $(".enviarcorreo").click(function(){
        alert("El correo fue enviado correctamente");
    });

    $(".card-text").on('dblclick', function(){ 
        $(this).css("color", "red");
    });

    $(".card-title").click(function(){
        $(".card-text").toggle();
    });
});

