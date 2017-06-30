
 var apiurl="https://en.wikipedia.org/w/api.php?callback=?";
  
////////////////////
$(document).ready(function(){
  document.body.background="http://images2015.cnblogs.com/news/66372/201612/66372-20161225201029354-1246395919.gif";
  
$("#search3").keyup(function(e){
  if(e.keyCode===13){
  work();}});

  $("#search2").on("click",work);
              });
  //}
  
function work()
{
  $("#logo").remove();
 document.body.background="https://3.bp.blogspot.com/-G76vl7CWvOc/UNu8zU6srYI/AAAAAAAAA7c/MB-EdcQXWLI/s1600/white.png";
  
    document.getElementById("main").style.color = "grey";
  

var a=document.getElementById("search3").value;
    $.getJSON(apiurl,{
             action:'query',
              format: 'json',
        inprop: "url",
        formatversion: 2,
        generator: 'search',
        gsrsearch: a,
        gsrwhat: "text",
        prop: 'extracts|info',
        exsentences: 3,
        exintro: "",
        explaintext: "",        
        exlimit: 20,
      })
      .success(function(response) {
        console.log(response);
      $('#display-result').empty();
        response.query.pages.forEach(function(resp) {
          $('#display-result').append(
            "<div id='result' class='results'><a href='" + resp.fullurl + "' target= '_blank'><h3>" + resp.title + "</h3></a><p = class='extract'>" + resp.extract + "</p></div>");
        })
    });
    }