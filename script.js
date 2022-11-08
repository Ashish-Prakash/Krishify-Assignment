function getData() {
  const name = document.getElementById("name");
  const doc = document.getElementById("email");
  const img = document.getElementById("Profile");
  var response;
  url = "https://randomuser.me/api/";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      response = data;
      img.src = response.results[0].picture.large;
      doc.innerHTML = response.results[0].email;
      name.innerHTML = response.results[0].name.first;
    });
}
getData();
