const hamburger = document.querySelector(".header__hamburger");

hamburger.addEventListener("click", () => {
  const isExpanded = hamburger.getAttribute("aria-expanded") === "true";

  hamburger.setAttribute("aria-expanded", !isExpanded);
});

const filterButton = document.querySelector(".shop__filter-button");
console.log(filterButton);

filterButton.addEventListener("click", () => {
  const isExpanded = filterButton.getAttribute("aria-expanded") === "true";

  filterButton.setAttribute("aria-expanded", !isExpanded);
});
