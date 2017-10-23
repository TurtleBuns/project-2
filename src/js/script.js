console.log("hi");

var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
var allResult = {};
var thumb = "";
url += '?' + $.param({
  'api-key': "871145aeefe14e919fe0c8cf62533730"
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  allResult = result;

  for (var i=0;i<=23;i++){
  if(allResult.results[i].multimedia.length == 0){
    $('div#articles').append('<a class="article" style=background-image:url("../assets/images/image-not-found.png");></a>');
    $('a.article').last().append('<p>' + allResult.results[i].abstract + '</p>');
    $('a.article').last().attr("href",allResult.results[i].url);
  }else{
    thumb = allResult.results[i].multimedia[3].url;
    $('div#articles').append('<a class="article" style=background-image:url(' + thumb + ');'  +  ' /></a>');
    $('a.article').last().append('<p>' + allResult.results[i].abstract + '</p>');
    $('a.article').last().attr({'href':allResult.results[i].url});
  };
};
  if($(select#sections.world) == "world"){
    allResult.section = "world"
  };

}).fail(function(err) {
  throw err;
});
console.log(allResult);
