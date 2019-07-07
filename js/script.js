var preloader = document.getElementById("preloader_preload");
function fadeOutnojquery(el){el.style.opacity = 1;
  var interpreloader = setInterval(function(){
    el.style.opacity = el.style.opacity - 0.05;
    if (el.style.opacity <=0.05){ clearInterval(interpreloader);
      preloader.style.display = "none";
    }},16);
  };
  window.onload = function(){
    setTimeout(function(){
      fadeOutnojquery(preloader);
    },1000);
  };
$(document).ready(function () {
  $(".tabs-content").on("click", 'button',function (event) { // Плавный переход вниз страницы
    event.preventDefault();
    console.log(this);
    
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    console.log(id, top);
    $('body,html').animate({scrollTop: top}, 1500);
    $('#fio').focus();
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
      $('#sendButton').click();   
    }
  });
  var $window = $(window);
  var $elem = $(".features")

  function isScrolledIntoView($elem, $window) {
      var docViewTop = $window.scrollTop();
      var docViewBottom = docViewTop + $window.height();

      var elemTop = $elem.offset().top;
      var elemBottom = elemTop + $elem.height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  $(document).on("scroll", function () {
      if (isScrolledIntoView($elem, $window)) {
          $elem.addClass("animate")
      }
  });
});
// Добавить переход на новую строку, если стоит фокус на предыдущей строке.