$(document).ready(function(){

    var flag = false;
    var scroll;

    $(window).scroll(function(){
        scroll = $(window).scrollTop();

        if(scroll > 100){
            if(!flag){
                $("#logo").css({"margin-top": "-10px", "width": "300px","height":"300px"});
                $("header").css({"background-color": "#606060"});
                $(".ir-arriba").css({"display":"block"});
                flag = true;
                
            }
        }else{
            if(flag){
                $("#logo").css({"margin-top": "1px", "width": "400px","height":"400px"});
                $("header").css({"background-color": "transparent"});
                $(".ir-arriba").css({"display":"none"});
                flag = false;
            }
        }

    });
    
    
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px',
        }, 1000);
        
    });

    $('.menu0').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 1000);
    });

    $('.menu1').click(function(){
        $('body, html').animate({
            scrollTop: '900px'
            
        }, 1000);
        $('.actividades').addClass("animated tada");
    });

    
    $('.menu2').click(function(){
        $('body, html').animate({
            scrollTop: '1600px'
        }, 1000);
        $('.biografia').addClass("animated tada");
    });

    $('.menu3').click(function(){
        $('body, html').animate({
            scrollTop: '2830px'
        }, 1000);
        $('.gestion').addClass("animated tada");
    });

    $('.menu4').click(function(){
        $('body, html').animate({
            scrollTop: '3500px'
        }, 1000);
        $('.proyecto').addClass("animated tada");
    });

    $('.menu5').click(function(){
        $('body, html').animate({
            scrollTop: '4200px'
        }, 1000);
        $('.social').addClass("animated tada");
    });

    $('.carousel').carousel({
        interval: 5000
      })

    
    var navButton = document.querySelector('.navigation-button');
    var navMenu = document.querySelector('.navigation-menu');
    var win = window;

    function openMenu(event) {
  
  navButton.classList.toggle('active');
  navMenu.classList.toggle('active');

  event.preventDefault();
  event.stopImmediatePropagation();
}
  
    function closeMenu(event) {
        if (navButton.classList.contains('active')) {
            navButton.classList.remove('active');
            navMenu.classList.remove('active');
  }
}
    navButton.addEventListener('click', openMenu, false);

        win.addEventListener('click',closeMenu, false);

       
        
        });
    

    