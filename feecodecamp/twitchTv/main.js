
$(function() {
  var channelName;
  var channelLink;
  var channelDetail;
  var id;
  var channelStatus;
  var channleLogo;

  function apiTwitchTv(channelName, id, data_length) {
    $.ajax({
      url: 'https://api.twitch.tv/kraken/streams/' + channelName,
      dataType: 'JSON',
      headers: {
        'Client-ID': id
      },
      success: function(data) {
        if (data['stream'] && data['_links']) {
          channelLink = data['_links']['self'];
          channelName = data['stream']['channel']['display_name'];
          channelDetail = 'online';
          channelStatus = data['stream']['channel']['status']
          channleLogo = data['stream']['channel']['profile_banner']

        } else if (data['stream'] == null && data['_links']) {
          channelLink = data['_links']['channel']
          var temp2 = [channelLink];
          for (var i = 0; i < temp2.length; i++) {
            var url = temp2[i];
            var array = url.split('/');
            channelName = array[array.length - 1];
          }
          channelDetail = "offline";
          channelStatus = "None";
        }
        if (channelStatus == "None") {
          $("#linkChanel").append('<li><a href="' + channelLink + '"target= _blank>' + channelName + '</a></li>'+channelDetail+'<br>');

        }else {
          $("#linkChanel").append('<li><a href="' + channelLink + '"target= _blank>' + channelName + '</a></li><br>'+channelStatus+'<img  id = "fixpicture" src="' + channleLogo + '"/><br>');
        }


      },
      error: function(data) {
        alert("this is not working out");
      }
    });

  }

  function main() {
    var lista = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var data_length = lista.length;
    for (var i = 0; i < data_length; i++) {
      channelName = lista[i];
      id = 'ae9v8bzyb7z11wrnetkj08zu0vwtdp';
      apiTwitchTv(channelName, id, data_length);
    }
  }
  main()


});
