$(document).ready(function() {
   
   $('a[href="#"]').click( function(e) {
      e.preventDefault();
   } );
   
   function toTitleCase(str) {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
   }
   
   
   
   
   var clickX,
      container,
      updateScrollPos = function(e) {
        container
          .css('cursor', 'col-resize')
          .scrollLeft(clickX - e.pageX);
      }

  $('.cards-strip').on({
    mousemove: function(e) {
      if(container){
        // hack to prevent image from zooming in - we couldn't stop propagating this evant
        container.addClass('scroll')
        $(".destination-card").attr("onclick", "return false;");
        updateScrollPos(e)
      };
    },
    mousedown: function(e) {
      container = $(e.target)

      // if user clicked on child element i.e. image
      if(!container.is('.cards-strip')){
        container = container.closest('.cards-strip')
      }
      
      $(".destination-card").attr("onclick", "");

      // save the click position for later
      clickX = container.scrollLeft() + e.pageX;

      // prevent from default browser behavior - image dragging
      e.preventDefault()
    },
    mouseup: function(e) {
      if(container){
        container.css('cursor', 'auto');
        container = null;
      }
    }
  });
   
   
   
   
   
   $(".search-icon-after").click(function(e) {
      
      e.preventDefault();
      
      $('#overall').css('display', 'block');
      $('#overall').css('opacity', '1');
      $('#city').css('display', 'block');
      $('.close').css('display', 'block');
      $('.search-icon-after').css('display', 'none');
      
      
      $('.logo').css('z-index', '1');
      
      $('#city').focus();
      
   });
   
   
   $(".close").click(function(e) {
      
      e.preventDefault();
      
      $('#overall').css('display', 'none');
      $('#overall').css('opacity', '0');
      $('#city').css('display', 'none');
      $('.close').css('display', 'none');
      $('.search-icon-after').css('display', 'block');
      
      $('.logo').css('z-index', '6');
      
      
   });
   
   
   
   
   
   
   $('#city').focus();
   


   var $weather = $('#weather')
   
   
   $("#city").keypress(function(e) {
         if(e.which == 13) {
             e.preventDefault();
             
             
      
               city = $("#city").val();
               city = toTitleCase(city);
               
               
               
               
               switch (city) {
                  
                  case "":
                  case null:
                     break;
                  
                  case "Prague":
                  case "prague":
                  case "prag":
                  case "praha":
                  
                     window.location.href = "/prague.html?city=" + city;
                     break;
                  
                  case "London":
                  case "london":
                     
                     window.location.href = "/london.html?city=" + city;
                     break;
                  
                  case "Rome":
                  case "rome":
                     
                     window.location.href = "/rome.html?city=" + city;
                     break;
                  
                  case "Paris":
                  case "paris":
                     
                     window.location.href = "/paris.html?city=" + city;
                     break;
                  
                  case "Amsterdam":
                  case "amsterdam":
                     
                     window.location.href = "/amsterdam.html?city=" + city;
                     break;
                  
                  case "Budapest":
                  case "budapest":
                     
                     window.location.href = "/budapest.html?city=" + city;
                     break;
                  
                  case "San Francisco":
                  case "san francisco":
                  case "San%20Francisco":
                  case "san%20francisco":
                     
                     window.location.href = "/sanfrancisco.html?city=" + city;
                     break;
                  
                  case "Singapore":
                     
                     window.location.href = "/singapore.html?city=" + city;
                     break;
                  
                  case "Hong Kong":
                  case "Hong%20Kong":
                     
                     window.location.href = "/hongkong.html?city=" + city;
                     break;
               
                  default: window.location.href = "/result.html?city=" + city;
               }
               
         }
   });
   
   
   
   
   $("#submit").click(function(e) {
      
      e.preventDefault();
      
      city = $("#city").val();
      city = toTitleCase(city);
               
               
               
               switch (city) {
                  
                  case "":
                  case null:
                     break;
                  
                  case "Prague":
                  case "prague":
                  case "prag":
                  case "praha":
                  
                     window.location.href = "/prague.html?city=" + city;
                     break;
                  
                  case "London":
                  case "london":
                     
                     window.location.href = "/london.html?city=" + city;
                     break;
                  
                  case "Rome":
                  case "rome":
                     
                     window.location.href = "/rome.html?city=" + city;
                     break;
                  
                  case "Paris":
                  case "paris":
                     
                     window.location.href = "/paris.html?city=" + city;
                     break;
                  
                  case "Amsterdam":
                  case "amsterdam":
                     
                     window.location.href = "/amsterdam.html?city=" + city;
                     break;
                  
                  case "Budapest":
                  case "budapest":
                     
                     window.location.href = "/budapest.html?city=" + city;
                     break;
                  
                  case "San Francisco":
                  case "san francisco":
                  case "San%20Francisco":
                  case "san%20francisco":
                     
                     window.location.href = "/sanfrancisco.html?city=" + city;
                     break;
                  
                  case "Singapore":
                     
                     window.location.href = "/singapore.html?city=" + city;
                     break;
                  
                  case "Hong Kong":
                  case "Hong%20Kong":
                     
                     window.location.href = "/hongkong.html?city=" + city;
                     break;
                  
                  
                  
                  
               
                  default: window.location.href = "/result.html?city=" + city;
               }
      
   });
      
      
});








