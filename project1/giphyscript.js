// QUERYING DATA BASED ON A GIVEN SEARCH GENRE
// function searchPhotos() {
//   let search = document.getElementById("search").value;
//   // to search a list of photos based on query
//   var apiKey = "HW9N_DcouND3LdAQFb-NUM_s-4BDQtFZ4R7_JANDOaM";
//   var url =
//     "https://api.unsplash.com/search/photos/?page=5&client_id=" +
//     apiKey +
//     "&query=" +
//     search;
//   $.ajax({
//     url: url,
//     method: "GET",
//   }).then(function (response) {
//     console.log(response);
//     response.results.forEach((photo) => {
//       var result = `<img src="${photo.urls.regular}" class="image">
//      <a href="${photo.links.download}">`;
//       $("#result").append(result);
//       // document.getElementById("result").append(result);
//     });
//   });
// }
// Search Collections
// https://api.unsplash.com/search/collections?page=1&query=office>; rel="first",
// <https://api.unsplash.com/search/collections?page=1&query=office>; rel="prev",
// <https://api.unsplash.com/search/collections?page=3&query=office>; rel="last",
// <https://api.unsplash.com/search/collections?page=3&query=office>; rel="next"
// List Featured Collections
// 200 OK
// Link: <https://api.unsplash.com/collections/featured?page=8>; rel="last", <https://api.unsplash.com/collections/featured?page=2>; rel="next"
// X-Ratelimit-Limit: 1000
// X-Ratelimit-Remaining: 999

// RESPONSE FROM A COLLECTION OF PHOTOS

function searchPhotos() {
  let search = document.getElementById("search").value; // to search a list of photos based on query
  var apiKey = "HW9N_DcouND3LdAQFb-NUM_s-4BDQtFZ4R7_JANDOaM";
  var url =
    "https://api.unsplash.com/collections/featured?page=1&client_id=" +
    apiKey +
    "&query=" +
    search;
  $.ajax({
    url: url,
    method: "GET",
  }).then(function (response) {
    //console.log(response);

    // response[0].preview_photos.forEach((element) => {
    //  // console.log(element.urls.regular);

    response.forEach((photo) => {
      // var result = `<img src="${photo.preview_photos[0].urls.regular}" class="image">
      //  <a href="${photo.links.download}">`;
      photo.preview_photos.forEach(function (element) {
        var imgEl = $("<img>", {
          src: element.urls.regular,
          class: "image",
        });
        //</img>var linkEl = $("<a>", {
        //   href: photo.links.download
        //});
        $("#result").append(imgEl);
        //  document.getElementById("result").append(result);
      });
    });
  });
}
