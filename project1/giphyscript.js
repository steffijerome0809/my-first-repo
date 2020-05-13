// QUERYING DATA BASED ON A GIVEN SEARCH GENRE

var imageContent = document.getElementById("image1-content");

$(document).ready(function () {
  $(".dropdown-trigger").dropdown();

  $(".modal").modal();

  //$("#myModal").modal("show");

  // imageContent.addEventListener("click", function () {
  //   //Imagemodal.modal("show");
  //   //alert("working");
  // });

  // $("#image1-content").on("click", function () {
  //   $("#myModal").modal("show");
  // });
});

// using modal function
var Imagemodal = document.getElementById("myModal");
var imageContent = document.getElementById("image1-content");
var modalImg = document.getElementById("img01");

// imageContent.addEventListener("click", function () {
//   Imagemodal.style.display = "block";

//   //alert("something");
// });

function searchPhotos() {
  let search = document.getElementById("search").value;
  // to search a list of photos based on query
  var apiKey = "HW9N_DcouND3LdAQFb-NUM_s-4BDQtFZ4R7_JANDOaM";
  var url =
    "https://api.unsplash.com/search/photos/?page=5&client_id=" +
    apiKey +
    "&query=" +
    search;
  $.ajax({
    url: url,
    method: "GET",
  }).then(function (response) {
    var image1 = response.results[0].urls.regular;
    console.log(image1);

    $("#list")
      .children(".item-image1")
      .html(
        $("<img>", {
          src: image1,
          alt: "image1Icon",
          id: "myImg",
          width: "350px",
          height: "200px",
        })
      );

    var image2 = response.results[1].urls.regular;
    $("#list")
      .children(".item-image2")
      .html(
        $("<img>", {
          src: image2,
          alt: "image2Icon",
          width: "350px",
          height: "250px",
        })
      );

    $("#result").append(result);
    // document.getElementById("result").append(result);
  });
}
// });

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

// function searchPhotos() {
//   let search = document.getElementById("search").value; // to search a list of photos based on query
//   var apiKey = "HW9N_DcouND3LdAQFb-NUM_s-4BDQtFZ4R7_JANDOaM";
//   var id = "9454911";
//   var url =
//     "https://api.unsplash.com/collections/featured?page=1&client_id=" +
//     apiKey +
//     "&query=" +
//     search +
//     "&id=" +
//     id;
//   $.ajax({
//     url: url,
//     method: "GET",
//   }).then(function (response) {
//     //console.log(response);
//     response.forEach(function (photo) {
//       photo.preview_photos.forEach(function (element) {
//         var imgEl = $("<img>", {
//           src: element.urls.regular,
//           class: "icon-display",
//           id: "image",
//         });

//         //.append('<i class="large material-icons">favorite_border</i>');
//         $("#result").append(imgEl);
//         //  document.getElementById("result").append(result);
//       });
//     });
//   });
// }
