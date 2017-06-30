var u=0;
function getWeather()
{
   if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      var lat=position.coords.latitude;
      var long=position.coords.longitude;
  $.getJSON("https://api.darksky.net/forecast/e795e583ed8798cf44e6b24644705eb4/"+lat+","+long+"?extend=hourly&callback=?", function(result){
    var t=result.timezone;
   /// var tempm=result.currently.temperature;
   var ft=result.currently.temperature; 
    var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en';
    $.getJSON(GEOCODING,function(w){ $('#city').html("You are in "+w.results[0].address_components[3].long_name+" , "+w.results[0].address_components[4].long_name);} 
    );
    var i=result.currently.icon;
    var s=result.currently.summary;
    $("#showpos").html("The Tmezone is :-"+t);
    $("#weather").html(i);
    $("#ftemp").html(ft);
    $("#summary").html(s);
    ////SETTING  BACKGROUD IMAGE::::
    var url1;
   switch(i){
     case 'clear-day' :url1="http://res.cloudinary.com/jun03/image/upload/v1496599406/On-a-Clear-Day-You-Can-See-the-Moon_qf1ojp.jpg";break;
     
     
     case 'clear-night' : url1="http://res.cloudinary.com/jun03/image/upload/v1496599623/1_orion_bphgs1.jpg";break;
     
     
     case 'rain' : url1="http://res.cloudinary.com/jun03/image/upload/v1496600151/thumb-1920-83196_pou3st.jpg" ;break;
     
     
     case 'snow' : url1="http://res.cloudinary.com/jun03/image/upload/v1496600287/depositphotos_3252217-stock-photo-snow-background_m2gp6y.jpg";break;
     
     case 'sleet' : url1="http://res.cloudinary.com/jun03/image/upload/v1496600970/maxresdefault_x32gb3.jpg";break;
     
     case  'wind': url1="http://res.cloudinary.com/jun03/image/upload/v1496601096/wallpaper-blow-wind-in-wheat-field-weather_tgdkjd.jpg";break; 
     
     case 'fog' :   url1="http://res.cloudinary.com/jun03/image/upload/v1496598584/foggy_road-wallpaper-1280x720_x9cykx.jpg";break;

     case 'cloudy': url1="http://res.cloudinary.com/jun03/image/upload/v1496598843/R8fgFrR_udlikf.jpg";
     break;
     
     case 'partly-cloudy-day': url1="http://res.cloudinary.com/jun03/image/upload/v1496598997/clounds_yeb5qq.jpg";break; 
     
     case 'partly-cloudy-night': url1="http://res.cloudinary.com/jun03/image/upload/v1496599069/background-night_nqg6vv.jpg";break;
           } 
   document.body.background=url1;
  });
});
   }
  else
   {$("#showpos").html("GeoLocation Not supported");
  } 
}

function change_unit(){
    var temp=document.getElementById('ftemp');
    var temp1=document.getElementById('ftemp1');
  var t=temp.innerHTML; 
  if(u===0){
  u=1;
  t-=32;
    t*=(5/9);
temp.innerHTML=(t.toFixed(2));
    
    temp1.innerHTML="&#8451";
  }
  else{u=0;
      t*=(9/5);
      t+=32;
      temp.innerHTML=(t.toFixed(2));
    temp1.innerHTML="&#8457";
}
}

$(document).ready(function(){
 getWeather();
  $("#toggle").on("click",change_unit);
  
});