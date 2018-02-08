$(function(){
  var name;
  var productLink;
  var dataHolder;
  var dataName;
  function getWikipediaViewer(name){
    $.ajax({
      type: 'GET',
      url:'https://en.wikipedia.org/w/api.php?action=opensearch&search='+name+'&format=json&callback=?',
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      async: false,
      success: function(data){
        dataHolder = data[3];
        dataName = data[1];
        $('.second').each(function(i){
          for (var i = 0; i < dataHolder.length; i++) {
            $(this).append('<li > <a id="newWindow" href="'+dataHolder[i]+'">'+dataName[i]+'</a></li>');
          }
        })
      },
      error: function(){
        alert('not found');
      }
    })
  }
  $('#find').on('click', function(){
    name = $('#searchEngin').val();
    getWikipediaViewer(name);
  });
  $('#random').on('click',function(event){
    event.preventDefault();
    window.open('https://en.wikipedia.org/wiki/Special:Random');
  });
  $('.second').find('li').on('click', function(){
    productLink =$('#newWindow').attr('href')
    window.open(productLink, '_blank');
  })


});
