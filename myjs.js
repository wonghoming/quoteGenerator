// JavaScript Document
$(document).ready(function() {
  $("#quoteGen").on("click", function() {
    quoteGen();
  });
  quoteGen();
});
var tweetLink = document.getElementById("tweetLink");
function quoteGen() {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(quoteInfo) {
    var author = "by " + quoteInfo.quoteAuthor;
    var quote = quoteInfo.quoteText;
    if(author === "by "){
      author = " by Anonymous";
    }
    $("#quote").html(quote);
    $("#author").html(author);
    var message;
    if((quote+author).length < 140){
      message = quote + author;
    } else if (quote.length < 140){
      message = quote;
    } else{
      message = quote.slice(0,137) + "...";
    }
    tweetLink.href = "https://twitter.com/intent/tweet?text=" + message;
  });
}
/*
$(document).ready(function() {
  $("#new-quote").on("click", function() {
    $(".quote").html("asdfasdf");
  });
});
*/