// Search bar toggling style
const searchContainer = document.querySelector(".search__container");
const input = document.querySelector(".search__input");
const searchBtn = document.querySelector(".search__btn");

searchBtn.addEventListener("click", () => {
  searchContainer.classList.toggle("active");
  input.focus();
})

// Search bar toggling style ends





