window.onload = function(){
  var theme = localStorage.getItem('theme');
  $('body').attr('data-bs-theme', theme);
  if(location.href.includes('result.html')){

$('#light').on('click', function() {
         $('body').attr('data-bs-theme', 'light');
         localStorage.setItem('theme', 'light');
});

$('#dark').on('click', function() {
         $('body').attr('data-bs-theme', 'dark');
         localStorage.setItem('theme', 'dark');
});

     setTimeout(function() {
        location.href="info.html";
}, 10000);
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

$('.btnpaq').on('click', function() {
     var tar = $(this).parent();
         rue = $(tar).find('span');
         h1 = $(tar).find('h1').text();
         h4 = $(tar).find('h4').text();
         h1f = h1.substring(0, h1.length -3);
         
     $(rue).addClass('spinner-border spinner-border-sm');

     localStorage.setItem('paq', h4 );
     localStorage.setItem('pri', h1f );
     setTimeout(function() {
     location.href="info.html";
     var t = 't';
}, 1000);
  
});