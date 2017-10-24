console.log("hi");
$(document).ready(function(){
  $("#select").on("change", function(){
    $('#articles').empty();
    var newSection = $('#select option:selected').val();
    var url = "https://api.nytimes.com/svc/topstories/v2/"+ newSection  +".json";

    console.log(newSection);
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
        thumb = allResult.results[i].multimedia[4].url;
        $('div#articles').append('<a class="article" style=background-image:url(' + thumb + ');'  +  ' /></a>');
        $('a.article').last().append('<p>' + allResult.results[i].abstract + '</p>');
        $('a.article').last().attr({'href':allResult.results[i].url});
      };
    };


    }).fail(function(err) {
      throw err;
    });

  });

});
