const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const input = document.getElementById("textInput");
const container = document.querySelector(".container");

const userImg = document.getElementById("userImg");
const url = document.getElementById("url");
const country = document.getElementById("country");
const user = document.getElementById("user");
const followers = document.getElementById("followers");
const repositories = document.getElementById("repositories");

icon.addEventListener("click", () => {
  let searchValue = input.value;
  handleSearch(searchValue);
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let searchValue = input.value;
    handleSearch(searchValue);
  }
});
function handleSearch(searchValue) {
  fetch(`https://api.github.com/users/${searchValue}`)
    .then((result) => result.json())
    .then((data) => {
      userImg.setProperty("src", data.avatar.url);
      url.innerText = data.html_url;
      country.innerText = data.location;
      user.innerText = data.name;
      followers.innerText = data.followers;
      repositories.innerText = data.public_repos;
    });
}
