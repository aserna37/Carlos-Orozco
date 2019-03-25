$(document).ready(function() {


    $(window).resize(function() {
        var width = $(window).width();
        if (width < 769){
          $(".iconosred").css("display","block");
          $(".iconos").css("display","none");
        }
        else{
            $(".iconosred").css("display","none");
            $(".iconos").css("display","block");
        }
      });


            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });

            $("nav ul").on("click", function() {
                $("nav ul").toggleClass("showing");
          });
            
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }

        $( "#header-plugin" ).load( "https://vivinantony.github.io/header-plugin/", function() {
	    $("a.back-to-link").attr("href", "http://blog.thelittletechie.com/2015/05/responsive-3d-flip-card.html#tlt")  
         });

        //script here
        $('.card').hover(function() {
        $(this).toggleClass('flipped');
        });

                
           
      });

      