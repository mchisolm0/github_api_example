$.ajaxSetup({
  data: {
    access_token: "YOUR_TOKEN_HERE"
  }
});

$(document).ready(function () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    var user = event.target.username.value;
    $.getJSON("http://api.github.com/users/" + user, function (data) {
      var photo = $("<img>");
      photo.attr("src", data.avatar_url);
      $("#photo-holder").html(photo);
    });
  });
});
