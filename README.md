GitHub API Example
==================

In this exercise we will use the GitHub API to view a user's profile
photo.

You should be able to enter a GitHub username into a form. When the
form is submitted, an AJAX request should be sent to the
[GitHub Users API](https://developer.github.com/v3/users/). The API
will return several pieces of information about the user, including
the URL for their avatar. Then use jQuery to show the image.

Steps
-----

1. Create an HTML page with a form consisting of a text input and a
submit button.
2. Create a JavaScript file and load it into your HTML file.
3. Don't forget to include jQuery as well.
    * You'll want to include it _before_ your JS file so jQuery is
      ready when your code runs.
4. Listen to the form's `submit` event.
    * Use `event.preventDefault()` so the page doesn't refresh.
5. Determine what username was entered.
    * Consider using `this` or `event.target.`
6. Call GitHub's User API to retrieve info about the user.
    * See how to [get info about a single user](https://developer.github.com/v3/users/#get-a-single-user).
    * The endpoint is `http://api.github.com/users/<username>`.
    * Consider using `$.ajax()`, `$.get()`, or `$.getJSON()`.
        * What are the benefits and differences of each?
7. When the data is returned, grab the `avatar_url` and use it to show
the image to the user.
    * Consider `.append()`, `.html()`, `.attr`, `.empty`.

Bonus
-----

Use some of the other data returned from GitHub. At first glance I
notice parameters named:

- `created_at`
- `disk_usage`
- `email`
- `followers`
- `following`
- `location`
- etc.

Use your knowledge of jQuery to display these elements on the page.

A note about API keys
---------------------

GitHub rate limits requests to its API. The limits are especially low
if you are not using an API key. An API key is a unique string that
your site passes to GitHub to identify itself. If your app stops (or
fails to start) working, it might be because GA's IP address is over
the request limit.

### To create an API key

1. Login to GitHub
2. Go to your "Settings" page (the gear icon in the top right).
3. Click on "Applications" in the left bar.
4. Under "Personal access tokens" click "Generate new token".
    * For "Token description" I put "GitHub in-class example" and I
      unselected all checkboxes except for "user".
    * Copy the token! It's only shown once!
5. In you JavaScript file, add the following code:

```
$.ajaxSetup({
  data: {
    access_token: "YOUR_TOKEN_HERE"
  }
});

```

This will append an access\_token parameter to every request that is
sent from your page. This isn't always what you want. Imagine if you
were programming Facebook and if you added this code then _every_ AJAX
request on the whole site would receive this new parameter. However,
for this example it should be fine.
