setTimeout(function(){
 window.location = "views/home.html";
}, 3000);

//ofertas
$(document).ready(function() {
    $('select').material_select();
  });
$('select').material_select('destroy');

//modal add card
$(document).ready(function(){
   // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
   $('.modal-trigger').leanModal();
 });
