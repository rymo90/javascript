
$(function(){
  var $city;
  var $country;
  var $name;
  var $celciues;
  var $main;
  var $icon;
  var $iconUrl;
  var $description;
  var $celFah;
  var $fahrenheit;
  var $tempName = 'celcius';
  function showLocalWeather(){
    $.ajax({
      url:'https://api.openweathermap.org/data/2.5/weather?&appid=018e8c924ad11391ae2fed095371b053&q='
      +$city+'&units='+$celMetric,
      dataType: 'JSON',
      success: function(data){
        $name = data.name;
        $country = data.sys.country;
        $celciues = data.main.temp;
        $icon = data.weather[0].icon;
        $iconUrl = 'https://openweathermap.org/img/w/'+ $icon+'.png';
        // = "<img src='http://openweathermap.org/img/w/'"+$icon+"'.png'>"
        $description = data.weather[0].description;
        $('#first').html($name + ', '+$country);
        $('#second').html($celciues+"<img src='" + $iconUrl + "'>");
        $('#therd').html($description);
      },
      error: function(data){
        alert("we have a problem");
      }
    });

  }
  $("#searchCity").on('click', function(event){
    event.preventDefault();
    $city = $('input').val();
    $celMetric = 'metric';
    showLocalWeather();
    $('input').val("")
    $('.container').last().html('<button type="button" name="button">'+$tempName+'</button>');
    $('button').last().addClass('celcius');
    $('button').last().on('click', function(event){
      event.preventDefault();
      $('button').last().toggleClass('celcius');
      $('button').last().toggleClass('fahrenheit');
      if ($(this).hasClass('celcius')) {
        $('button').last().text('celcius');
        $('#second').html(setCelcius() +"<img src='" + $iconUrl + "'>" );

      }else{
      $('button').last().text('fahrenheit');
      $("#second").html(setFahrenheit() +"<img src='" + $iconUrl + "'>");
      }
    })

  })

  function setFahrenheit(){
    $fahrenheit = ($celciues * 9/5) + 32;
    return $fahrenheit +'F'
  }
  function setCelcius(){
    return $celciues + 'C'
  }
});
