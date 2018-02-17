// url: https://api.twitch.tv/kraken/oauth2/authorize ?client_id=ae9v8bzyb7z11wrnetkj08zu0vwtdp &redirect_uri=http://localhost &response_type=<type> &scope=channel_read
// name: redwanyassin
// Client id: ae9v8bzyb7z11wrnetkj08zu0vwtdp
// Redirect URL : http://localhost
$(function() {
  var channelName;
  var channelLink;
  var channelOF
  var id;
  var channelStatus;
  var channleLogo;
  var channelId;

  function apiTwitchTv(channelName, id, data_length) {
    $.ajax({
      url: 'https://wind-bow.gomix.me/twitch-api/streams/'+channelName+'?callback=?',
      dataType: 'JSON',
      headers: {
        'Client-ID': id
      },
      success: function(data) {
        if (data.stream == null) {
          channelOF = "OFFLINE";
        } else {
          channelOF = "ONLINE";
        }
        $("#status").append(channelOF + '<br>');
      },
      error: function(data) {
        console.log("this is not working out");
      },
    });
    $.ajax({
      url: 'https://wind-bow.gomix.me/twitch-api/channels/'+channelName+'?callback=?',
      dataType: 'JSON',
      headers: {
        'Client-ID': id
      },
      success: function(data2){
        channelLink = data2.url;
        channelId =data2._id;
        channelStatus = data2.status;
        channleLogo = data2.logo;
        // console.log(data2);
        $("#linkChanel").append('<a href="'+channelLink+'"target="_blank">'+channelName+'</a><br>');
        $("#discription").append(channelStatus + '<br>');

      },
      error: function(data2){
        console.log("this is not working out for data2");
      }
    });
    // console.log(channelStatus);


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
