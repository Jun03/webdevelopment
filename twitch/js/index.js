var streamers=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","syndicate","riotgames"];


function getdetails(){
  streamers.forEach(function(channel){
    
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + channel + '?callback=?',function(data){
      
      var details;
      var status;
      if(data.stream===null){
        status='offline';
        details='Offline';
       }
      else if(data.stream===undefined){
        status='offline';
        details='Closed Account';
        
      }
      else{
        status='online';
        details=data.stream.game;
      }
   
    $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + channel + '?callback=?',function(data){
      var logo,name,description;
      $("#kk").html("Hello1911");
      if(data.logo!=null)
        logo=data.logo;
      else logo='https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=jun';
      if(data.display_name!=null) 
      name=data.display_name;
      else name=channel;
      if(status==='online'){
        description="->"+data.status;
      } 
      else description ="";
      html="<div id='channel' class='row " + status+"' ><div class='col-xs-2 col-sm-1' id='icon'><img src='"+ logo +"' class='logo'></div><div class='col-xs-10 col-sm-3 'id='name'><a href='"+data.url+ "target ='_blank'>"+name+"</a></div><div class='col-xs-10 col-sm-8' id='streaming'> "+details+"<span class='hidden-xs'> "+description+"</span></div></div>";
      if(status==='online'){
        $("#display").prepend(html);
      }
      else $("#display").append(html);
      
    });
  });
});
}
         
                    

$(document).ready(function(){
 getdetails();
  $("#all").click(function(){
    $(".online, .offline").removeClass("hidden");
  });
  $("#online").click(function(){
    $(".online").removeClass("hidden");
    $(".offline").addClass("hidden");
  
  });
  
  $("#offline").click(function(){
    $(".offline").removeClass("hidden");
    $(".online").addClass("hidden");
  
  }); 
  
});