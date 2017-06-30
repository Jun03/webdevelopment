var myQuote = "";
var myAuthor = "";


function getQuote(){
  $.ajax({
    url:'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    type: 'GET',
    datatype:'json',
    success: function(data){
      
      var r = data;
      
      myQuote='"'+r.quote+'"';
      myAuthor=':'+r.author;
      $("#quote").html(myQuote);
      $("#author").html(myAuthor);
      
    },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V"); // Enter here your Mashape key
    }
  });
}

function openurl(url){
  window.open(url);
}



$(document).ready(function() {
    getQuote();
  $(".newQuote").on("click", getQuote);
  $("#btn2").on("click",function(){
    openurl("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+encodeURIComponent('"'+myQuote+'":'+myAuthor));
  });
  });