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
    console.log(response);
    response.results.forEach((photo) => {
      var result = `<img src="${photo.urls.regular}" class="image">
     <a href="${photo.links.download}">`;
      $("#result").append(result);
      // document.getElementById("result").append(result);
    });
  });
}