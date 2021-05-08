const resultContainer = document.querySelector(".results");
const searchValue = document.getElementById("searchValue");
const searchBtn = document.querySelector(".find");

searchBtn.addEventListener("click", handleInput);

function handleInput() {
  let search = searchValue.value.replaceAll(" ", "+");
  resultContainer.innerText = "";
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
    .then((result) => result.json())
    .then((data) => {
      handleData(data);
    });
}

function handleData(data) {
  for (let i = 0; i < data.items.length; i++) {
    const {
      previewLink,
      imageLinks,
      title,
      authors,
      categories,
      publisher,
      publishedDate,
    } = data.items[i].volumeInfo;

    const itemElement = document.createElement("a");
    const imgElement = document.createElement("img");
    const titleElement = document.createElement("p");
    const authorElement = document.createElement("p");
    const categoriesElement = document.createElement("p");
    const publisherElement = document.createElement("p");
    const dateElement = document.createElement("p");
    
    dateElement.classList.add("date");
    dateElement.innerText = publishedDate;
    itemElement.appendChild(dateElement);

    publisherElement.classList.add("publisher");
    publisherElement.innerText = publisher;
    itemElement.appendChild(publisherElement);

    categoriesElement.classList.add("categories");
    categoriesElement.innerText = categories;
    itemElement.appendChild(categoriesElement);

    authorElement.classList.add("author");
    authorElement.innerText = authors[0];
    itemElement.appendChild(authorElement);

    titleElement.classList.add("title");
    titleElement.innerText = title;
    itemElement.appendChild(titleElement);

    imgElement.setAttribute("src", imageLinks.thumbnail);
    imgElement.setAttribute("alt", title);
    itemElement.appendChild(imgElement);

    itemElement.setAttribute("href", previewLink);
    itemElement.classList.add("item");

    resultContainer.appendChild(itemElement);

  }
}
function render(){
    
}
