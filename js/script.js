var preloaders = ['pldr1.svg', 'pldr2.svg', 'pldr3.svg', 'pldr4.svg', 'pldr5.svg']
function randomPreloader () { // Рандомный прелоадер при перезагрузке стр.
  var min = 0,max = preloaders.length,
  randomIndex = Math.floor(Math.random() * (max - min) + min);
  console.log(randomIndex);
  return 'css/'+preloaders[randomIndex];
}
$('.preloader_preload').append('<object data='+randomPreloader()+'></object>');
// $('.svgPreloader').attr('data',randomPreloader())

var preloader = document.getElementById("preloader_preload");
function fadeOutnojquery(el){
  el.style.opacity = 1;
  var interpreloader = setInterval(function(){
    el.style.opacity = el.style.opacity - 0.05;
    if (el.style.opacity <=0.05){ 
      clearInterval(interpreloader);
      preloader.style.display = "none";
    }},16);
  $('.tabs').hide().fadeIn(1300);
  $('.tabs-content').hide().fadeIn(2000);
  };
$(document).ready(function () { // Функция при готовности DOM
  setTimeout(function(){
    fadeOutnojquery(preloader);
  },1000);
  var inputs = ['fio', 'tel', 'email', 'data', 'sendButton'];
  $(".tabs-content").on("click", 'button',function (event) { // Плавный переход вниз страницы
    event.preventDefault();
    console.log(this);
    
    var id  = 'orderBank', // ID на который опустится скролл
        top = $(id).offset().top;
    console.log(id, top);
    $('body,html').animate({scrollTop: top}, 1500);
    setTimeout(function(){
      $('#fio').focus();
    },1600);
  });
  $('#tel').mask('+7 (999) 999-99-99');
  $('#data').mask('99.99.9999');
  $('#tel').on('keyup change', function(e){
    console.log(e.which);
    
    if ($('#tel').val().indexOf('_') == -1 && e.which != 9 && e.which != 16) {
      $('#email').focus();
    }
  });
  $('#fio, #tel, #data, #email').keyup(function (e) { 
    if (e.which == 13) {
      $('#'+inputs[inputs.indexOf(this.id)+1]).focus();  
    }
  });
});
// Добавить переход на новую строку, если стоит фокус на предыдущей строке.