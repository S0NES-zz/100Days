const container = document.getElementById("container");
const loading = document.querySelector(".loading");

const titles = [
  "Lorem ipsum dolor sit amet.",
  "Officia sit hic nihil quisquam?",
  "In laudantium quidem hic ipsam?",
  "Dolorum nostrum culpa magni reprehenderit?",
  "Rerum corporis nisi ea eum.",
];

const texts = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ex aut numquam quaerat deserunt rerum minima dolor autem reiciendis mollitia!",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fugit repellendus soluta nobis, dolorum officiis debitis vero. Earum dignissimos maxime ipsum ratione nisi, accusamus enim!",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nam commodi laudantium sapiente provident? Non officiis temporibus quo ipsa, voluptas eveniet accusamus excepturi, enim ratione, adipisci atque dolorem iure ad.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, molestiae fugit laudantium porro dicta mollitia cum corrupti placeat dignissimos. Autem maiores consectetur reiciendis repudiandae architecto officia ut placeat sapiente. Perferendis, doloremque veniam dignissimos nemo recusandae ipsa sint magni, aliquid repudiandae libero quidem et facilis ad odit, quia eligendi error cum!",
];

// Scroll
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  console.log("scroll", scrollTop + clientHeight, scrollHeight - 50);
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    createPost();
  }
});

// create initial posts
createPost();
createPost();
createPost();

function createPost() {
  const post = document.createElement("div");
  post.classList.add("post");

  const random = Math.floor(Math.random() * 12) + 1;
  switch (random) {
    case 1:
      post.innerHTML = `
         <img src="https://lorempixel.com/150/200/animals/" alt="" />
          <div class="post-info">
          <h2 class="post-title">${randomFrom(titles)}</h2>
          <small class="post-date">${randomDate()}</small>
          <p class="post-excerpt">${randomFrom(texts)}</p>
         </div>
        `;
      break;
    case 2:
      post.innerHTML = `
          <img src="https://lorempixel.com/150/200/sports/" alt="" />
           <div class="post-info">
           <h2 class="post-title">${randomFrom(titles)}</h2>
           <small class="post-date">${randomDate()}</small>
           <p class="post-excerpt">${randomFrom(texts)}</p>
          </div>
         `;
      break;
    case 3:
      post.innerHTML = `
        <img src="https://lorempixel.com/150/200/nightlife/" alt="" />
         <div class="post-info">
         <h2 class="post-title">${randomFrom(titles)}</h2>
         <small class="post-date">${randomDate()}</small>
         <p class="post-excerpt">${randomFrom(texts)}</p>
        </div>
       `;
      break;
    case 4:
      post.innerHTML = `
        <img src="https://lorempixel.com/150/200/abstract/" alt="" />
         <div class="post-info">
         <h2 class="post-title">${randomFrom(titles)}</h2>
         <small class="post-date">${randomDate()}</small>
         <p class="post-excerpt">${randomFrom(texts)}</p>
        </div>
       `;
      break;
    case 5:
      post.innerHTML = `
        <img src="https://lorempixel.com/150/200/city/" alt="" />
         <div class="post-info">
         <h2 class="post-title">${randomFrom(titles)}</h2>
         <small class="post-date">${randomDate()}</small>
         <p class="post-excerpt">${randomFrom(texts)}</p>
        </div>
       `;
      break;
    case 6:
      post.innerHTML = `
        <img src="https://lorempixel.com/150/200/transport/" alt="" />
         <div class="post-info">
         <h2 class="post-title">${randomFrom(titles)}</h2>
         <small class="post-date">${randomDate()}</small>
         <p class="post-excerpt">${randomFrom(texts)}</p>
        </div>
       `;
      break;
    case 7:
      post.innerHTML = `
        <img src="https://lorempixel.com/150/200/people/" alt="" />
         <div class="post-info">
         <h2 class="post-title">${randomFrom(titles)}</h2>
         <small class="post-date">${randomDate()}</small>
         <p class="post-excerpt">${randomFrom(texts)}</p>
        </div>
       `;
      break;
    case 8:
      post.innerHTML = `
        <img src="https://lorempixel.com/150/200/food/" alt="" />
         <div class="post-info">
         <h2 class="post-title">${randomFrom(titles)}</h2>
         <small class="post-date">${randomDate()}</small>
         <p class="post-excerpt">${randomFrom(texts)}</p>
        </div>
       `;
      break;
    case 9:
      post.innerHTML = `
        <img src="https://lorempixel.com/150/200/nature/" alt="" />
         <div class="post-info">
         <h2 class="post-title">${randomFrom(titles)}</h2>
         <small class="post-date">${randomDate()}</small>
         <p class="post-excerpt">${randomFrom(texts)}</p>
        </div>
       `;
      break;
    case 10:
      post.innerHTML = `
        <img src="https://lorempixel.com/150/200/business/" alt="" />
         <div class="post-info">
         <h2 class="post-title">${randomFrom(titles)}</h2>
         <small class="post-date">${randomDate()}</small>
         <p class="post-excerpt">${randomFrom(texts)}</p>
        </div>
       `;
      break;
    case 11:
      post.innerHTML = `
        <img src="https://lorempixel.com/150/200/cats/" alt="" />
         <div class="post-info">
         <h2 class="post-title">${randomFrom(titles)}</h2>
         <small class="post-date">${randomDate()}</small>
         <p class="post-excerpt">${randomFrom(texts)}</p>
        </div>
       `;
      break;
    case 12:
      post.innerHTML = `
        <img src="https://lorempixel.com/150/200/fashion/" alt="" />
         <div class="post-info">
         <h2 class="post-title">${randomFrom(titles)}</h2>
         <small class="post-date">${randomDate()}</small>
         <p class="post-excerpt">${randomFrom(texts)}</p>
        </div>
       `;
      break;
    case 13:
      post.innerHTML = `
        <img src="https://lorempixel.com/150/200/technics/" alt="" />
         <div class="post-info">
         <h2 class="post-title">${randomFrom(titles)}</h2>
         <small class="post-date">${randomDate()}</small>
         <p class="post-excerpt">${randomFrom(texts)}</p>
        </div>
       `;
      break;
  }

  container.appendChild(post);
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomDate() {
  const day = Math.floor(Math.random() * 27) + 1;
  const month = Math.floor(Math.random() * 11) + 1;
  const year = Math.floor(Math.random() * (2500 - 1500) + 1500);
  return `${month}/${day}/${year}`;
}
