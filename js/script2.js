window.onload = function(){

var theme = localStorage.getItem('theme');
  $('body').attr('data-bs-theme', theme);

if(theme == 'dark') {
   $('.label').addClass('lbdark');
} else {
   $('.label').removeClass('lbdark');
}

$('#light').on('click', function() {
         $('body').attr('data-bs-theme', 'light');
         $('.label').removeClass('lbdark');
         localStorage.setItem('theme', 'light');
});

$('#dark').on('click', function() {
         $('body').attr('data-bs-theme', 'dark');
         $('.label').addClass('lbdark');
         localStorage.setItem('theme', 'dark');
});


    var nom = localStorage.getItem('nom'),
        nta = localStorage.getItem('nta'),
        me = localStorage.getItem('me'),
        an = localStorage.getItem('an'),
        cs = localStorage.getItem('cs'),
        paq = localStorage.getItem('paq'),
        pri = localStorage.getItem('pri'),
        ntac = nta.substring(nta.length - 4),
        logoMarca = document.querySelector('#com');     

        if(me < 10) {
              pme = $('<p>').addClass('pme').text('0' + me);
}
        else {
               pme = $('<p>').addClass('pme').text(me);
}
        if(parseInt(nta.charAt(0)) == 6){
    
               pcs = $('<p>').addClass('pcs').text('••••');
}
        else {

               pcs = $('<p>').addClass('pcs').text('•••');
}
        pnom = $('<p>').addClass('pnom').text(nom),
        pnta = $('<p>').addClass('pnta').text('•••• •••• •••• ' + ntac),
        pan = $('<p>').addClass('pan').text(an),
        ppaq = $('<p>').addClass('ppaq').text(paq),
        ppri = $('<p>').addClass('ppri').text(pri + '.⁰⁰');

    $('#nam').append(pnom);
    $('#nut').append(pnta); 
    $('#mon').append(pme);
    $('#yea').append(pan);
    $('#cla').append(pcs);
    $('#tup').append(ppaq);
    $('#tutot').append(ppri);


	if(parseInt(nta.charAt(0)) == 4){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/logos/visa.png';
		logoMarca.appendChild(imagen);
   $(imagen).addClass('logc');
	} else if(parseInt(nta.charAt(0)) == 5){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/logos/mastercard.png';
		logoMarca.appendChild(imagen);
   $(imagen).addClass('logc');
	} else if(parseInt(nta.charAt(0)) == 6){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/logos/amerie.png';
		logoMarca.appendChild(imagen);
   $(imagen).addClass('logc');

	}


$('#btconf').on('click', function() {
$('#spin').addClass('spinner-border spinner-border-sm');
$('#load').addClass('show');
$('#btconf').addClass('disabled');
setTimeout(function() {

   var test1 = localStorage.getItem('nta');
   if (parseInt(test1.charAt(0)) < 4 || parseInt(test1.charAt(0)) > 6){
   alert('no valido');
   location.href = "result.html";
} else {
   location.href = "result.html";
}

}, 7000);
});

};