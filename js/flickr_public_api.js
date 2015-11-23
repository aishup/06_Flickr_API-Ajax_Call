$(document).ready(function() {


 $('ul li').click(function () {
    // highlight the button
    // not AJAX, just cool looking
    console.log("came inside");
    $("li").removeClass("selected");
    console.log(this);
    $(this).addClass("selected");
    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var camera = $(this).text();
    var flickrOptions = {
      tags: camera,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  }); // end click

}); // end ready