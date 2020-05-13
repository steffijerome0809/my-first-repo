$(document).ready(function () {
  $(".dropdown-trigger").dropdown();

  var images = document.querySelectorAll("#images");
  
  var imageList = [];
  //set up a counter to run through the list of images
  var imageCounter = 0;
  //use a forEach loop to get a copy of all the images and push into an array of items
  images.forEach(function(image){
    //push each imageto the array of images
    imageList.push(image.src);


  $(".modal").modal();
});

// modal open...

// making grid dynamic
// iterate over response images
// $("#list").append(newItem.append(newImage));

// loads on ready

$(document).ready(() => {
  let search = "popular";
  var apiKey = "HW9N_DcouND3LdAQFb-NUM_s-4BDQtFZ4R7_JANDOaM";
  var url = `https://api.unsplash.com/search/photos/?page=5&client_id=${apiKey}&query=${search}`;
  // only gives 10 responses so can only run 10 times then we have to run this entire code again for another 10
  function makePopularGrid() {
    for (let i = 0; i < 10; i++) {
      $.get(url).then((response) => {
        // make new image at [i], make new div. append image to div. append div to list
        randomHeight = Math.round(Math.random() * (20 - 8) + 8);
        newItem = $("<div>", {
          class: "item modal-trigger",
          height: `${randomHeight}em`,
          "data-target": "modal1",
        });
        newImage = $("<img>", {
          src: response.results[i].urls.regular,
          id: "images",
        });

        $("#list").append(newItem.append(newImage));
      });
    }
  }
  makePopularGrid();
  //find a way to get more than 10 responses
});
//search button...
$("#searchButton").on("click", (e) => {
  e.preventDefault();
  let search = $("#search").val();
  var apiKey = "HW9N_DcouND3LdAQFb-NUM_s-4BDQtFZ4R7_JANDOaM";
  var url = `https://api.unsplash.com/search/photos/?page=5&client_id=${apiKey}&query=${search}`;
  // only gives 10 responses so can only run 10 times then we have to run this entire code again for another 10
  for (let i = 0; i < 10; i++) {
    $.get(url).then((response) => {
      // make new image at [i], make new div. append image to div. append div to list
      randomHeight = Math.round(Math.random() * (20 - 8) + 8);
      newItem = $("<div>", { class: "item", height: `${randomHeight}em` });
      newImage = $("<img>", { src: response.results[i].urls.regular });
      $("#list").append(newItem.append(newImage));
    });
  }
});
// //PseudoCode
// FEATURES:
// 1 Main page with several photos.
// 1-A: -Create div to put the images
// 1-B: -Make sure it is fluid and responsive for mobile/desktop
// 1-C: - Endless scroll
// 1-D: Make it so several photos can be viewed at oncuechange
// 1-D1: Resize images
// 1-D2: Put images on to a grid

// 2Navigation Bar
// 2-A: Search bar
// 2-B: Genre dropdown
// 2-C: Home button
// 2-D: Make a logo and put it there

// 3. GET IMAGES
// 3-A: Make ajax request to api
// 3-B: template literal for queries
// 3-C: See what type of data the requests give us (i.e artist/likes/genre etc)
// 3-C1:

// 4. pages for genres

// 6. Image on click opens modal
// 6-A: Modal for images
// 6-A1: Image view counter
// 6-B: img url
// //                                                                   Extra
// 7. Sort
// 8. Upload!
// 5. Share
