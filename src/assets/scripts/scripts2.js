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
        
        var city = $.urlParam('city');
        
        if (city == null) {
         window.location.href = "/prague.html?city=prague";
        }
        
        
        // EVENTS
        
        var whatevs = 1;
        
        var token = "CC622VRKRUY6RYFPO57T";
        
         $.ajax({
            url: 'https://www.eventbriteapi.com/v3/events/search/?token=' + token + '&format=json&sort_by=best&categories=103,110,113,105,104,102,109,106,108&venue.city=' + city,
            mathod: 'GET',
            dataType: 'json',
            success: function(events) {
               
               
               var date1o = Date.parse(events.events[0].start.local) + "";
               var date1 = date1o.split(" ");
               
               $('#sec4').append("<a href='" + events.events[0].url + "' target='_blank' class='to-eat-other'><div class='other-img' style='background: url(" + events.events[0].logo.url + ") no-repeat scroll; background-size: cover;'></div><h3 class='event-name'>" + events.events[0].name.text + "</h3><span class='event-time'>" + date1[2] + " " + date1[1] + ", " + date1[3] + "</span></a>");
               
               $('#sec4').append("<a href='" + events.events[1].url + "' target='_blank' class='to-eat-other'><div class='other-img' style='background: url(" + events.events[1].logo.url + ") no-repeat scroll; background-size: cover;'></div><h3 class='event-name'>" + events.events[1].name.text + "</h3><span class='event-time'>" + date1[2] + " " + date1[1] + ", " + date1[3] + "</span></a>");
               
               $('#sec4').append("<a href='" + events.events[2].url + "' target='_blank' class='to-eat-other'><div class='other-img' style='background: url(" + events.events[2].logo.url + ") no-repeat scroll; background-size: cover;'></div><h3 class='event-name'>" + events.events[2].name.text + "</h3><span class='event-time'>" + date1[2] + " " + date1[1] + ", " + date1[3] + "</span></a>");
               
               $('#sec4').append("<a href='" + events.events[3].url + "' target='_blank' class='to-eat-other'><div class='other-img' style='background: url(" + events.events[3].logo.url + ") no-repeat scroll; background-size: cover;'></div><h3 class='event-name'>" + events.events[3].name.text + "</h3><span class='event-time'>" + date1[2] + " " + date1[1] + ", " + date1[3] + "</span></a>");
               
               
               
               
               
            }
         });
        
        
        
      
      
      

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
      
      
      
      
      
      
      /*
      $.ajax({
         url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=08884a8b6bff7a5ac0e47d1101f110ac&units=metric',
         mathod: 'GET',
         dataType: 'json',
         success: function(weather) {
               $weather.append('<p>Temperature: ' + weather.main.temp + '</p>');
               $lat = coord.lat;
               $lng = coord.lng;
               alert($lng);
         }
      });
      
      $.ajax({
         url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=08884a8b6bff7a5ac0e47d1101f110ac&units=metric',
         mathod: 'GET',
         dataType: 'json',
         success: function(weather) {
               $weather.append('<p>Forecast 1: ' + weather.list[0].main.temp_max + '</p>');
               $weather.append('<p>Forecast 2: ' + weather.list[1].main.temp_max + '</p>');
               $weather.append('<p>Forecast 3: ' + weather.list[2].main.temp_max + '</p>');
               
         }
      });
      
      */
      
      // WIKITRAVEL API
   
   
      $.ajax({
            url: 'https://en.wikivoyage.org/w/api.php?action=query&prop=extracts&exsentences=2&explaintext=&titles=' + city + '&format=json&redirects',
            mathod: 'GET',
            dataType: 'jsonp',
            headers: { 'Api-User-Agent': 'Citadela/1.0 (ries.v@seznam.cz)' },
            success: function(desc) {
               
               try {
                  if (desc.query.pages[-1].missing == "") {
                     window.location.href = "/nothing.html?city=" + city;
                  }
               }
               catch(err) {
                  
               }
               
               
               
               
               var pageid = [];
                  for( var id in desc.query.pages ) {
                      pageid.push( id );
               }
               
               var kdyz1 = desc.query.pages[ pageid[0] ].extract.replace(/\u2013|\u2014/g, "a");
               kdyz1 = kdyz1.trim();
               var title1 = desc.query.pages[ pageid[0] ].title;
               
               
               
               
               
               if (kdyz1 == title1 + " is a huge city with several district articles containing sightseeing, restaurant, nightlife and accommodation listings a have a look at each of them.") {
                  
                  $.ajax({
                     url: 'https://en.wikivoyage.org/w/api.php?action=query&prop=extracts&exchars=350&explaintext=&titles=' + city + '&format=json&redirects',
                     mathod: 'GET',
                     dataType: 'jsonp',
                     headers: { 'Api-User-Agent': 'Citadela/1.0 (ries.v@seznam.cz)' },
                     success: function(desc) {
                        
                        var pageid = [];
                           for( var id in desc.query.pages ) {
                               pageid.push( id );
                        }
                        
                        var finaltitle = desc.query.pages[ pageid[0] ].title;
                        var finalkdyz = desc.query.pages[ pageid[0] ].extract.replace(/\u2013|\u2014/g, "-");
                        finalkdyz = finalkdyz.trim();
                        
                        
                        $desc.append('<h1>' + desc.query.pages[ pageid[0] ].title + '</h1>');
                        $desc.append('<p class="city-description">' + finalkdyz.replace(finaltitle + " is a huge city with several district articles containing sightseeing, restaurant, nightlife and accommodation listings - have a look at each of them.", "") + '</p>');
                        
                     }
                     
                     
                     
                     
                     
                  });
                  
                  
                  
                  
               
               
               
               } else if (kdyz1 == "For other places with the same name, see " + title1 + " (disambiguation).") {
                  
                  
                  $.ajax({
                     url: 'https://en.wikivoyage.org/w/api.php?action=query&prop=extracts&exchars=350&explaintext=&titles=' + city + '&format=json&redirects',
                     mathod: 'GET',
                     dataType: 'jsonp',
                     headers: { 'Api-User-Agent': 'Citadela/1.0 (ries.v@seznam.cz)' },
                     success: function(desc) {
                        
                        var pageid = [];
                           for( var id in desc.query.pages ) {
                               pageid.push( id );
                        }
                        
                        var finaltitle = desc.query.pages[ pageid[0] ].title;
                        var finalkdyz = desc.query.pages[ pageid[0] ].extract.replace(/\u2013|\u2014/g, "-");
                        finalkdyz = finalkdyz.trim();
                        finalkdyz = finalkdyz.replace("For other places with the same name, see " + finaltitle + " (disambiguation).", "");
                        
                        
                        $desc.append('<h1>' + desc.query.pages[ pageid[0] ].title + '</h1>');
                        $desc.append('<p class="city-description">' + finalkdyz.replace(finaltitle + " is a huge city with several district articles containing sightseeing, restaurant, nightlife and accommodation listings - have a look at each of them.", "") + '</p>');
                        
                     }
                     
                  });
                  
                  
                  
                  
                  
                  
                  
                  
                  
               } else {
               
                  $desc.append('<h1>' + desc.query.pages[ pageid[0] ].title + '</h1>');
                  $desc.append('<p class="city-description">' + desc.query.pages[ pageid[0] ].extract + '</p>');
               }
               
            
            }
            
            
               
            
            
            
         }); 
      
      
      
      // LAT LNG
      
      /*
      
      $.ajax({
         url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + city + '&key=AIzaSyBhZEWwRXllKxX2WxAk6ZxUWMPe2gjlFxM',
         mathod: 'GET',
         dataType: 'json',
         success: function(lngltd) {
               $lngltd.append('<span class="lat">' + lngltd.results[0].geometry.location.lat + '</span>');
               $lngltd.append('<span class="lat">' + lngltd.results[0].geometry.location.lng + '</span>');
               
         }
      }); */
      
      
      
      
      
      // YELP API
      
      var auth = {
         
      consumerKey: "DLdZ3_tJvz8xblwko31aYg", 
      consumerSecret: "fkUmjTBuuF0wt75-ErEbjx_i1Ek",
      accessToken: "waFbmjM54ddkGxn0X1Sg4MgHCUDrX7gL",
      accessTokenSecret: "L0ep3SQcXXARFmDmmyMP1UpvUa8",
      serviceProvider: { 
      signatureMethod: "HMAC-SHA1"
      }
    };
    
    var terms = 'food';
    var termss = 'points of interest';
    var near = city.replace("%20", "+");
    var howmuch = 10;
    var sort = 2;
    var language1 = "GB";
    var language2 = "en";
    
    
    
    var accessor = {
      consumerSecret: auth.consumerSecret,
      tokenSecret: auth.accessTokenSecret
    };
    
    
    parameters = [];
    parameters.push(['term', terms]);
    parameters.push(['location', near]);
    parameters.push(['limit', howmuch]);
    parameters.push(['sort', sort]);
    parameters.push(['cc', language1]);
    parameters.push(['lang', language2]);
    parameters.push(['callback', 'cb']);
    parameters.push(['oauth_consumer_key', auth.consumerKey]);
    parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
    parameters.push(['oauth_token', auth.accessToken]);
    parameters.push(['oauth_signature_method', 'HMAC-SHA1']);
    
    var message = { 
      'action': 'http://api.yelp.com/v2/search',
      'method': 'GET',
      'parameters': parameters 
    };
    
    OAuth.setTimestampAndNonce(message);
    OAuth.SignatureMethod.sign(message, accessor);
    
    var parameterMap = OAuth.getParameterMap(message.parameters);
    parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature)
    console.log(parameterMap);
    
    $.ajax({
      'url': message.action,
      'data': parameterMap,
      'cache': true,
      'dataType': 'jsonp',
      'jsonpCallback': 'cb',
      'success': function(data, textStats, XMLHttpRequest) {
        console.log(data);
        $("#sec3").append("<section class='anitest-no'><a href='#' class='detail-close2'><img src='assets/close-ico2.png'></a><h3 class='detail-headline'>" + data.businesses[0].name + "</h3><p class='detail-address'>" + data.businesses[0].location.address[0] + ", " + data.businesses[0].location.postal_code + " " + data.businesses[0].location.city + "</p><p class='detail-snippet'>" + data.businesses[0].snippet_text + "</p><div class='detail-yelp'><a href='" + data.businesses[0].url + "'>More on yelp.com</a><img src='assets/yelp.jpg'></div><a href='#' class='to-eat-card' style='background: url(" + data.businesses[0].image_url.replace('ms.jpg','o.jpg') + ") center no-repeat scroll; background-size: cover;'><div class='in-card-text'><span class='card-hood'>" + data.businesses[0].location.address[0] + "</span><h3>" + data.businesses[0].name + "</h3><h3 class='eat-type'>" + data.businesses[0].categories[0][0] + "</h3></div><span class='eat-rating'>" + data.businesses[0].rating + "/5</span></a></section>");
        
        $("#sec3").append("<section class='anitest-no'><a href='#' class='detail-close2'><img src='assets/close-ico2.png'></a><h3 class='detail-headline'>" + data.businesses[1].name + "</h3><p class='detail-address'>" + data.businesses[1].location.address[0] + ", " + data.businesses[1].location.postal_code + " " + data.businesses[1].location.city + "</p><p class='detail-snippet'>" + data.businesses[1].snippet_text + "</p><div class='detail-yelp'><a href='" + data.businesses[1].url + "'>More on yelp.com</a><img src='assets/yelp.jpg'></div><a href='#' class='to-eat-other'><div class='other-img' style='background: url(" + data.businesses[1].image_url.replace('ms.jpg','o.jpg') + ") center no-repeat scroll; background-size: cover;'></div><span class='other-hood'>" + data.businesses[1].location.address[0] + "</span><h3>" + data.businesses[1].name + "</h3><h3 class='eat-type'>" + data.businesses[1].categories[0][0] + "</h3><span class='eat-rating'>" + data.businesses[1].rating + "/5</span></a></section>")
        
        $("#sec3").append("<section class='anitest-no'><a href='#' class='detail-close2'><img src='assets/close-ico2.png'></a><h3 class='detail-headline'>" + data.businesses[2].name + "</h3><p class='detail-address'>" + data.businesses[2].location.address[0] + ", " + data.businesses[2].location.postal_code + " " + data.businesses[2].location.city + "</p><p class='detail-snippet'>" + data.businesses[2].snippet_text + "</p><div class='detail-yelp'><a href='" + data.businesses[2].url + "'>More on yelp.com</a><img src='assets/yelp.jpg'></div><a href='#' class='to-eat-other'><div class='other-img' style='background: url(" + data.businesses[2].image_url.replace('ms.jpg','o.jpg') + ") center no-repeat scroll; background-size: cover;'></div><span class='other-hood'>" + data.businesses[2].location.address[0] + "</span><h3>" + data.businesses[2].name + "</h3><h3 class='eat-type'>" + data.businesses[2].categories[0][0] + "</h3><span class='eat-rating'>" + data.businesses[2].rating + "/5</span></a></section>")
        
        $("#sec3").append("<section class='anitest-no'><a href='#' class='detail-close2'><img src='assets/close-ico2.png'></a><h3 class='detail-headline'>" + data.businesses[3].name + "</h3><p class='detail-address'>" + data.businesses[3].location.address[0] + ", " + data.businesses[3].location.postal_code + " " + data.businesses[3].location.city + "</p><p class='detail-snippet'>" + data.businesses[3].snippet_text + "</p><div class='detail-yelp'><a href='" + data.businesses[3].url + "'>More on yelp.com</a><img src='assets/yelp.jpg'></div><a href='#' class='to-eat-other'><div class='other-img' style='background: url(" + data.businesses[3].image_url.replace('ms.jpg','o.jpg') + ") center no-repeat scroll; background-size: cover;'></div><span class='other-hood'>" + data.businesses[3].location.address[0] + "</span><h3>" + data.businesses[3].name + "</h3><h3 class='eat-type'>" + data.businesses[3].categories[0][0] + "</h3><span class='eat-rating'>" + data.businesses[3].rating + "/5</span></a></section>")
        
        $("#sec3").append("<section class='anitest-no'><a href='#' class='detail-close2'><img src='assets/close-ico2.png'></a><h3 class='detail-headline'>" + data.businesses[4].name + "</h3><p class='detail-address'>" + data.businesses[4].location.address[0] + ", " + data.businesses[4].location.postal_code + " " + data.businesses[4].location.city + "</p><p class='detail-snippet'>" + data.businesses[4].snippet_text + "</p><div class='detail-yelp'><a href='" + data.businesses[4].url + "'>More on yelp.com</a><img src='assets/yelp.jpg'></div><a href='#' class='to-eat-other'><div class='other-img' style='background: url(" + data.businesses[4].image_url.replace('ms.jpg','o.jpg') + ") center no-repeat scroll; background-size: cover;'></div><span class='other-hood'>" + data.businesses[4].location.address[0] + "</span><h3>" + data.businesses[4].name + "</h3><h3 class='eat-type'>" + data.businesses[4].categories[0][0] + "</h3><span class='eat-rating'>" + data.businesses[4].rating + "/5</span></a></section>")
        
        $("#sec3").append("<section class='anitest-no'><a href='#' class='detail-close2'><img src='assets/close-ico2.png'></a><h3 class='detail-headline'>" + data.businesses[5].name + "</h3><p class='detail-address'>" + data.businesses[5].location.address[0] + ", " + data.businesses[5].location.postal_code + " " + data.businesses[5].location.city + "</p><p class='detail-snippet'>" + data.businesses[5].snippet_text + "</p><div class='detail-yelp'><a href='" + data.businesses[5].url + "'>More on yelp.com</a><img src='assets/yelp.jpg'></div><a href='#' class='to-eat-other'><div class='other-img' style='background: url(" + data.businesses[5].image_url.replace('ms.jpg','o.jpg') + ") center no-repeat scroll; background-size: cover;'></div><span class='other-hood'>" + data.businesses[5].location.address[0] + "</span><h3>" + data.businesses[5].name + "</h3><h3 class='eat-type'>" + data.businesses[5].categories[0][0] + "</h3><span class='eat-rating'>" + data.businesses[5].rating + "/5</span></a></section>")
        
        
        
        
      
    
    parameters = [];
    parameters.push(['term', termss]);
    parameters.push(['location', near]);
    parameters.push(['limit', howmuch]);
    parameters.push(['sort', sort]);
    parameters.push(['cc', language1]);
    parameters.push(['lang', language2]);
    parameters.push(['callback', 'cb']);
    parameters.push(['oauth_consumer_key', auth.consumerKey]);
    parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
    parameters.push(['oauth_token', auth.accessToken]);
    parameters.push(['oauth_signature_method', 'HMAC-SHA1']);
    
    var messagee = { 
      'action': 'http://api.yelp.com/v2/search',
      'method': 'GET',
      'parameters': parameters 
    };
    
    OAuth.setTimestampAndNonce(messagee);
    OAuth.SignatureMethod.sign(messagee, accessor);
    
    var parameterMap = OAuth.getParameterMap(messagee.parameters);
    parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature)
    console.log(parameterMap);
    
    $.ajax({
      'url': messagee.action,
      'data': parameterMap,
      'cache': true,
      'dataType': 'jsonp',
      'jsonpCallback': 'cb',
      'success': function(data2, textStats, XMLHttpRequest) {
        console.log(data2);
        $("#sec2").append("<section class='anitest-no'><a href='#' class='detail-close'><img src='assets/close-ico2.png'></a><h3 class='detail-headline'>" + data2.businesses[0].name + "</h3><p class='detail-address'>" + data2.businesses[0].location.address[0] + ", " + data2.businesses[0].location.postal_code + " " + data2.businesses[0].location.city + "</p><p class='detail-snippet'>" + data2.businesses[0].snippet_text + "</p><div class='detail-yelp'><a href='" + data2.businesses[0].url + "'>More on yelp.com</a><img src='assets/yelp.jpg'></div><a href='#' class='to-see-card odd' style='background: url(" + data2.businesses[0].image_url.replace('ms.jpg','o.jpg') + ") center no-repeat scroll; background-size: cover;'><div class='in-card-text'><span class='card-hood'>" + data2.businesses[0].location.address[0] + "</span><h3>" + data2.businesses[0].name + "</h3></div></a></section>");
        
        $("#sec2").append("<section class='anitest-no'><a href='#' class='detail-close'><img src='assets/close-ico2.png'></a><h3 class='detail-headline'>" + data2.businesses[1].name + "</h3><p class='detail-address'>" + data2.businesses[1].location.address[0] + ", " + data2.businesses[1].location.postal_code + " " + data2.businesses[1].location.city + "</p><p class='detail-snippet'>" + data2.businesses[1].snippet_text + "</p><div class='detail-yelp'><a href='" + data2.businesses[1].url + "'>More on yelp.com</a><img src='assets/yelp.jpg'></div><a href='#' class='to-see-card' style='background: url(" + data2.businesses[1].image_url.replace('ms.jpg','o.jpg') + ") center no-repeat scroll; background-size: cover;'><div class='in-card-text'><span class='card-hood'>" + data2.businesses[1].location.address[0] + "</span><h3>" + data2.businesses[1].name + "</h3></div></a></section>");
        
        $("#sec2").append("<section class='anitest-no'><a href='#' class='detail-close'><img src='assets/close-ico2.png'></a><h3 class='detail-headline'>" + data2.businesses[2].name + "</h3><p class='detail-address'>" + data2.businesses[2].location.address[0] + ", " + data2.businesses[2].location.postal_code + " " + data2.businesses[2].location.city + "</p><p class='detail-snippet'>" + data2.businesses[2].snippet_text + "</p><div class='detail-yelp'><a href='" + data2.businesses[2].url + "'>More on yelp.com</a><img src='assets/yelp.jpg'></div><a href='#' class='to-see-other odd'><div class='other-img' style='background: url(" + data2.businesses[2].image_url.replace('ms.jpg','o.jpg') + ") center no-repeat scroll; background-size: cover;'></div><span class='other-hood'>" + data2.businesses[2].location.address[0] + "</span><h3>" + data2.businesses[2].name + "</h3></a></section>")
        
        $("#sec2").append("<section class='anitest-no'><a href='#' class='detail-close'><img src='assets/close-ico2.png'></a><h3 class='detail-headline'>" + data2.businesses[3].name + "</h3><p class='detail-address'>" + data2.businesses[3].location.address[0] + ", " + data2.businesses[3].location.postal_code + " " + data2.businesses[3].location.city + "</p><p class='detail-snippet'>" + data2.businesses[3].snippet_text + "</p><div class='detail-yelp'><a href='" + data2.businesses[3].url + "'>More on yelp.com</a><img src='assets/yelp.jpg'></div><a href='#' class='to-see-other'><div class='other-img' style='background: url(" + data2.businesses[3].image_url.replace('ms.jpg','o.jpg') + ") center no-repeat scroll; background-size: cover;'></div><span class='other-hood'>" + data2.businesses[3].location.address[0] + "</span><h3>" + data2.businesses[3].name + "</h3></a></section>")
        
        $("#sec2").append("<section class='anitest-no'><a href='#' class='detail-close'><img src='assets/close-ico2.png'></a><h3 class='detail-headline'>" + data2.businesses[4].name + "</h3><p class='detail-address'>" + data2.businesses[4].location.address[0] + ", " + data2.businesses[4].location.postal_code + " " + data2.businesses[4].location.city + "</p><p class='detail-snippet'>" + data2.businesses[4].snippet_text + "</p><div class='detail-yelp'><a href='" + data2.businesses[4].url + "'>More on yelp.com</a><img src='assets/yelp.jpg'></div><a href='#' class='to-see-other odd'><div class='other-img' style='background: url(" + data2.businesses[4].image_url.replace('ms.jpg','o.jpg') + ") center no-repeat scroll; background-size: cover;'></div><span class='other-hood'>" + data2.businesses[4].location.address[0] + "</span><h3>" + data2.businesses[4].name + "</h3></a></section>")
        
        $("#sec2").append("<section class='anitest-no'><a href='#' class='detail-close'><img src='assets/close-ico2.png'></a><h3 class='detail-headline'>" + data2.businesses[5].name + "</h3><p class='detail-address'>" + data2.businesses[5].location.address[0] + ", " + data2.businesses[5].location.postal_code + " " + data2.businesses[5].location.city + "</p><p class='detail-snippet'>" + data2.businesses[5].snippet_text + "</p><div class='detail-yelp'><a href='" + data2.businesses[5].url + "'>More on yelp.com</a><img src='assets/yelp.jpg'></div><a href='#' class='to-see-other'><div class='other-img' style='background: url(" + data2.businesses[5].image_url.replace('ms.jpg','o.jpg') + ") center no-repeat scroll; background-size: cover;'></div><span class='other-hood'>" + data2.businesses[5].location.address[0] + "</span><h3>" + data2.businesses[5].name + "</h3></a></section>")
        
        $("#sec2").append("<section class='anitest-no'><a href='#' class='detail-close'><img src='assets/close-ico2.png'></a><h3 class='detail-headline'>" + data2.businesses[6].name + "</h3><p class='detail-address'>" + data2.businesses[2].location.address[0] + ", " + data2.businesses[6].location.postal_code + " " + data2.businesses[6].location.city + "</p><p class='detail-snippet'>" + data2.businesses[6].snippet_text + "</p><div class='detail-yelp'><a href='" + data2.businesses[6].url + "'>More on yelp.com</a><img src='assets/yelp.jpg'></div><a href='#' class='to-see-other odd'><div class='other-img' style='background: url(" + data2.businesses[6].image_url.replace('ms.jpg','o.jpg') + ") center no-repeat scroll; background-size: cover;'></div><span class='other-hood'>" + data2.businesses[2].location.address[0] + "</span><h3>" + data2.businesses[6].name + "</h3></a></section>")
        
        $("#sec2").append("<section class='anitest-no'><a href='#' class='detail-close'><img src='assets/close-ico2.png'></a><h3 class='detail-headline'>" + data2.businesses[7].name + "</h3><p class='detail-address'>" + data2.businesses[2].location.address[0] + ", " + data2.businesses[7].location.postal_code + " " + data2.businesses[7].location.city + "</p><p class='detail-snippet'>" + data2.businesses[7].snippet_text + "</p><div class='detail-yelp'><a href='" + data2.businesses[7].url + "'>More on yelp.com</a><img src='assets/yelp.jpg'></div><a href='#' class='to-see-other'><div class='other-img' style='background: url(" + data2.businesses[7].image_url.replace('ms.jpg','o.jpg') + ") center no-repeat scroll; background-size: cover;'></div><span class='other-hood'>" + data2.businesses[2].location.address[0] + "</span><h3>" + data2.businesses[7].name + "</h3></a></section>")
        
        
      }
    });  
        
        
        
      }
      
    });
    
    
    
    
    
    
   
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});









