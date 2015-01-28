// The GitHub API requires an access token so that it can track who is
// making the API requests. The following code is a way to attach the
// API key you made (see the class notes for instructions) to every
// AJAX request that is sent from this page. This could be bad if we
// were sending AJAX requests to multiple sites, but since we're only
// sending them to GitHub in this example, this approach works fine.
$.ajaxSetup({
  data: {
    access_token: "YOUR_TOKEN_HERE"
  }
});

// Call the GitHub API for a specific user and show the avatar that is
// contained in the response data.
function getUserPhoto(user) {
  $.getJSON("http://api.github.com/users/" + user, function (data) {
    console.log(data);
    var photo = $("<img>");
    photo.attr("src", data.avatar_url);
    $("#photo-holder").html(photo);
  });
}

// Attach an event handler to the HTML form to catch when it is
// submitted. Grab the username that was typed into the text field and
// pass it to getUserPhoto(). Don't forget to call
// `event.preventDefault()` to stop the page from refreshing!
function listenForSubmit() {
  $("form").on("submit", function (event) {
    event.preventDefault();
    var user = event.target.username.value;
    console.log("calling getUserPhoto() for " + user);
    getUserPhoto(user);
  });
}

// Wait until the DOM has finished loading before attempting to
// attach any event listeners or interact with it in any way.
$(document).ready(listenForSubmit);
