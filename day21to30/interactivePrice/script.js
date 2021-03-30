const followers = {
  1: ["10K", 8.0],
  2: ["50K", 12.0],
  3: ["100K", 16.0],
  4: ["500K", 24.0],
  5: ["1M", 36.0],
};

const slider = document.getElementById("slider-range");
const pageviews = document.getElementById("pageviews");
const priceComponent = document.querySelector(".price");
const btnToggleDiscount = document.querySelector(".switch-input"); //mudar Nome!!
const period = document.querySelector(".price-period");
let toggled = false;

slider.oninput = () => {
  let [pageViews, price] = followers[slider.value];

  pageviews.innerHTML = `${pageViews} Pageviews`;
  priceComponent.innerHTML = `$ ${price.toFixed(2)}`;
};

btnToggleDiscount.addEventListener("click", () => {
  let [pageViews, price] = followers[slider.value];

  priceComponent.innerHTML = btnToggleDiscount.checked
    ? `$ ${(price * 0.75).toFixed(2)}`
    : `$ ${price.toFixed(2)}`;
});
