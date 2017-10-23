console.log("hi");

var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
var allResult = {};
var thumb = {};
url += '?' + $.param({
  'api-key': "871145aeefe14e919fe0c8cf62533730"
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  allResult = result;
  thumb = allResult.results["0"].multimedia[4].url;
}).fail(function(err) {
  throw err;
});
console.log(allResult);
//for (var i=0;i<12;i++){console.log(allResult.results[i])}
$(document).ready(function(){
$('div#articles').append('<img src=' + thumb + ' ' + '/>')
});
