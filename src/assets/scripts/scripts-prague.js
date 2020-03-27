$(document).ready(function() {
   
   function FtoC(temp) {return Math.round((temp - 32) / (9 / 5));}
   
   function toTitleCase(str) {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
   }
   
   
   $("#sec2").on('click', 'a.to-see-card', function(e) {
      
      e.preventDefault();
      
      
      var xyz = $(this).parent();
      
      
      $('.overall-detail1').fadeIn(200);
      
      setTimeout(function(){
         xyz.removeClass('anitest-no').addClass('anitest');
         xyz.fadeIn(400);
      }, 200);
   
   });
   
   $("#sec2").on('click', 'a.to-see-other', function(e) {
      
      e.preventDefault();
      
      
      var xyz = $(this).parent();
      
      
      $('.overall-detail1').fadeIn(200);
      
      setTimeout(function(){
         xyz.removeClass('anitest-no').addClass('anitest');
         xyz.fadeIn(400);
      }, 200);
   
   });
   
   $("#sec3").on('click', 'a.to-eat-card', function(e) {
      
      e.preventDefault();
      
      
      var xyz = $(this).parent();
      
      
      $('.overall-detail2').fadeIn(200);
      $('.three').css('z-index', '11');
      
      
      setTimeout(function(){
         xyz.removeClass('anitest-no').addClass('anitest');
         xyz.fadeIn(400);
      }, 200);
      
   });
   
   
   $("#sec3").on('click', 'a.to-eat-other', function(e) {
      
      e.preventDefault();
      
      
      var xyz = $(this).parent();
      
      
      $('.overall-detail2').fadeIn(200);
      $('.three').css('z-index', '11');
      
      
      setTimeout(function(){
         xyz.removeClass('anitest-no').addClass('anitest');
         xyz.fadeIn(400);
      }, 200);
      
   });
   
   $("#sec2").on('click', 'a.detail-close', function(e) {
      
      e.preventDefault();
      
      $('.anitest').attr('style', '');
      $('.anitest').removeClass('anitest').addClass('anitest-no');
      $('.overall-detail1').fadeOut(400);
      
   });
   
   
   $("#sec2").on('click', '.overall-detail1', function(e) {
      
      e.preventDefault();
      
      $('.anitest').attr('style', '');
      $('.anitest').removeClass('anitest').addClass('anitest-no');
      $('.overall-detail1').fadeOut(400);
      
   });
   
   
   
   $("#sec3").on('click', 'a.detail-close2', function(e) {
      
      e.preventDefault();
      
      $('.anitest').attr('style', '');
      $('.anitest').removeClass('anitest').addClass('anitest-no');
      $('.three').css('z-index', '1');
      $('.overall-detail2').fadeOut(400);
      
   });
   
   $("#sec3").on('click', '.overall-detail2', function(e) {
      
      e.preventDefault();
      
      $('.anitest').attr('style', '');
      $('.anitest').removeClass('anitest').addClass('anitest-no');
      $('.three').css('z-index', '1');
      $('.overall-detail2').fadeOut(400);
      
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
   
   
   
   
   
   
   
   
   
   $("#city").keypress(function(e) {
         if(e.which == 13) {
             e.preventDefault();
      
               city = $("#city").val();
               
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
   
   
   
   
   
   


   var $weather = $('#weather')
   var $lngltd = $('.coordinates')
   var $desc = $('#sec1')
   var lat = 0;
   var lng = 0;
   var imgurl = "a";
   
   
   
      
      $.urlParam = function(name){
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            if (results==null){
               return null;
            }
            else{
               return results[1] || 0;
            }
        }
        
        var city = "prague";
        
        
        
        
        
        
        
        
      
      
      

            // WEATHER
      
            var consumerKey = "dj0yJmk9V2pnRGUxVXFHdDRQJmQ9WVdrOU5tTjZUMGhFTm1jbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1iMQ--";
            var consumerSecret = "8aec2378f77337f6bdb13b2fab52710a935d8fa9";
            var locationToQuery = city; //Can be zip code or anything that works in the query select woeid from geo.places(1) where text=<Your Location>
            
            
            var makeSignedRequest = function(ck,cs,loc) {
            
                var encodedurl = "https://query.yahooapis.com/v1/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+loc+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
            
                var accessor = { consumerSecret: cs, tokenSecret: ""};          
                var message = { action: encodedurl, method: "GET", parameters: [["oauth_version","1.0"],["oauth_consumer_key",ck]]};
            
                OAuth.setTimestampAndNonce(message);
                OAuth.SignatureMethod.sign(message, accessor);
            
                var parameterMap = OAuth.getParameterMap(message);
                var baseStr = OAuth.decodeForm(OAuth.SignatureMethod.getBaseString(message));           
                var theSig = "";
            
                if (parameterMap.parameters) {
                    for (var item in parameterMap.parameters) {
                        for (var subitem in parameterMap.parameters[item]) {
                            if (parameterMap.parameters[item][subitem] == "oauth_signature") {
                                theSig = parameterMap.parameters[item][1];                    
                                break;                      
                            }
                        }
                    }
                }
            
                var paramList = baseStr[2][0].split("&");
                paramList.push("oauth_signature="+ encodeURIComponent(theSig));
                paramList.sort(function(a,b) {
                    if (a[0] < b[0]) return -1;
                    if (a[0] > b[0]) return 1;
                    if (a[1] < b[1]) return  -1;
                    if (a[1] > b[1]) return 1;
                    return 0;
                });
            
                var locString = "";
                for (var x in paramList) {
                    locString += paramList[x] + "&";                
                }
            
                var finalStr = baseStr[1][0] + "?" + locString.slice(0,locString.length - 1);
            
                return finalStr;
            };
            
            //Use the encodedURL to make your request
            var encodedURL = makeSignedRequest(consumerKey, consumerSecret, locationToQuery);
      
      $.ajax({
         url: encodedURL,
         success: function(weatherer) {
            
                  
            var weatherType1 = weatherer.query.results.channel.item.forecast[0].text.trim();
            var weatherType2 = weatherer.query.results.channel.item.forecast[1].text;
            var weatherType3 = weatherer.query.results.channel.item.forecast[2].text;
            
            switch (weatherType1) {
               case "Rain And Snow":
                  weatherType1 = "rainsnow";
                  break;
               case "Rain":
                  weatherType1 = "rain";
                  break;
               case "Scattered Showers":
                  weatherType1 = "rain";
                  break;
               case "Scattered Thunderstorms":
                  weatherType1 = "storm";
                  break;
               case "Showers":
                  weatherType1 = "rain";
                  break;
               case "Thunderstorms":
                  weatherType1 = "storm";
                  break;
               case "Snow":
                  weatherType1 = "snow";
                  break;
               case "Heavy Snow":
                  weatherType1 = "snow";
                  break;
               case "Mostly Cloudy":
                  weatherType1 = "cloudy";
                  break;
               case "Partly Cloudy":
                  weatherType1 = "cloudy";
                  break;
               case "Cloudy":
                  weatherType1 = "cloudy";
                  break;
               case "Mostly Sunny":
                  weatherType1 = "sunny";
                  break;
               case "Sunny":
                  weatherType1 = "sunny";
                  break;
               default:
                  weatherType1 = "cloudy";
            }
            
            switch (weatherType2) {
               case "Rain And Snow":
                  weatherType2 = "rainsnow";
                  break;
               case "Rain":
                  weatherType2 = "rain";
                  break;
               case "Scattered Showers":
                  weatherType2 = "rain";
                  break;
               case "Scattered Thunderstorms":
                  weatherType2 = "storm";
                  break;
               case "Showers":
                  weatherType2 = "rain";
                  break;
               case "Thunderstorms":
                  weatherType2 = "storm";
                  break;
               case "Snow":
                  weatherType2 = "snow";
                  break;
               case "Heavy Snow":
                  weatherType2 = "snow";
                  break;
               case "Mostly Cloudy":
                  weatherType2 = "cloudy";
                  break;
               case "Partly Cloudy":
                  weatherType2 = "cloudy";
                  break;
               case "Cloudy":
                  weatherType2 = "cloudy";
                  break;
               case "Mostly Sunny":
                  weatherType2 = "sunny";
                  break;
               case "Sunny":
                  weatherType2 = "sunny";
                  break;
               default:
                  weatherType2 = "cloudy";
            }
            
            switch (weatherType3) {
               case "Rain And Snow":
                  weatherType3 = "rainsnow";
                  break;
               case "Rain":
                  weatherType3 = "rain";
                  break;
               case "Scattered Showers":
                  weatherType3 = "rain";
                  break;
               case "Scattered Thunderstorms":
                  weatherType3 = "storm";
                  break;
               case "Showers":
                  weatherType3 = "rain";
                  break;
               case "Thunderstorms":
                  weatherType3 = "storm";
                  break;
               case "Snow":
                  weatherType3 = "snow";
                  break;
               case "Heavy Snow":
                  weatherType3 = "snow";
                  break;
               case "Mostly Cloudy":
                  weatherType3 = "cloudy";
                  break;
               case "Partly Cloudy":
                  weatherType3 = "cloudy";
                  break;
               case "Cloudy":
                  weatherType3 = "cloudy";
                  break;
               case "Mostly Sunny":
                  weatherType3 = "sunny";
                  break;
               case "Sunny":
                  weatherType3 = "sunny";
                  break;
               default:
                  weatherType3 = "cloudy";
            }
            
            
            $("#today").append("<p class='day'>TODAY</p><div class='weather-icon " + weatherType1 + "'></div><span class='weather-temp'>" + FtoC(weatherer.query.results.channel.item.forecast[0].high) + "</span><i class='degrees'>&deg;C</i>");
            $("#tomorrow").append("<p class='day'>TOMORROW</p><div class='weather-icon " + weatherType2 + "'></div><span class='weather-temp'>" + FtoC(weatherer.query.results.channel.item.forecast[1].high) + "</span><i class='degrees'>&deg;C</i>");
            $("#overmorrow").append("<p class='day'>OVERMORROW</p><div class='weather-icon " + weatherType3 + "'></div><span class='weather-temp'>" + FtoC(weatherer.query.results.channel.item.forecast[2].high) + "</span><i class='degrees'>&deg;C</i>");
            
            
         }
         
      })
    
    
    
    
    
    
});









