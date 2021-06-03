const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const input = document.getElementById("textInput");
const container = document.querySelector(".container");

const result = document.querySelector(".result");
const userImg = document.getElementById("userImg");
const url = document.getElementById("url");
const country = document.getElementById("country");
const user = document.getElementById("user");
const followers = document.getElementById("followers");
const repositories = document.getElementById("repositories");

icon.addEventListener("click", () =>{
    search.classList.toggle("active");
})
input.addEventListener("input", () => {
  result.style.display = "flex";
  let searchValue = input.value;
  fetch(`https://api.github.com/users/${searchValue}`)
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      userImg.setAttribute("src", data.avatar_url);
      url.innerText = data.html_url;
      url.setAttribute("href", data.html_url);
      country.innerText = data.location;
      user.innerText = data.name;
      followers.innerText = data.followers;
      repositories.innerText = data.public_repos;
    })
});
