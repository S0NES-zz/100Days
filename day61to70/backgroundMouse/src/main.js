const section  = document.querySelector("section");

for (let i = 0; i < 1000; i++){
    const item = document.createElement("span");
    section.appendChild(item);
}