window.onload = function(){
    var paq = localStorage.getItem('paq'),
        pri = localStorage.getItem('pri'),
        np = $('<p>').addClass('paqt').text('Paquete ' + paq);
        np1 = $('<p>').addClass('pri').text(pri + '.⁰⁰');

    $('#gpepaq').append(np);
    $('#gppri').append(np1);

    // alert('Elegiste paquete ' + paq + ' con precio de ' + pri);
};
