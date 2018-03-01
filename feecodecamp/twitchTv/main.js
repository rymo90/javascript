$(function() {
  var channelName;
  var channelLink;
  var channelOnOff;
  var channelOnOff;
  var channleLogo;
  var channelBanner;
  var channelId;

  function apiStream(channelName, channelId) {
    $.ajax({
      url: 'https://api.twitch.tv/kraken/streams/' + channelName,
      dataType: 'JSON',
      headers: {
        'Client-ID': channelId
      },
      success: function(data) {
        if (data.stream == null) {
          channelOnOff = "OFFLINE"
        } else {
          channelOnOff = "ONLINE"
        }
        apiChanels(channelName, channelOnOff, channelId);
      },
      error: function(data) {
        console.log("this is not working out");
      }
    });

  }

  function apiChanels(channelName, channelOnOff) {
    $.ajax({
      url: 'https://wind-bow.gomix.me/twitch-api/channels/' + channelName + '?callback=?',
      dataType: 'JSON',
      headers: {
        'Client-ID': channelId
      },
      success: function(data2) {
        console.log(data2);
        channelLink = '<li id="link"><a href="' + data2.url + '" target = _blank>' + channelName + '</a></li>';
        channelStatus = data2.status;
        channleLogo = "<img src=" + data2.logo + ">";
        channelBanner = data2.profile_banner;
        console.log(channelBanner);
        $(".grid").append("<div class='profile' background-image= '" + channelBanner + "' ><li id='logo'>" +
          channleLogo + "</li><li id='onof'>" + channelOnOff + "</li><li id='status'>" + channelStatus + "</li>" + channelLink + "</div>"
        );
      },
      error: function(data) {
        console.log("this is not working out");
      }
    });

  }

  function main() {
    var lista = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    for (var i = 0; i < lista.length; i++) {
      channelName = lista[i];
      channelId = 'ae9v8bzyb7z11wrnetkj08zu0vwtdp';
      apiStream(channelName, channelId);
      // apiChanels(channelName)

    }
  }
  main()


});
