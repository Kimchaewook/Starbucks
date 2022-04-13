// variable section

const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const thisYear = document.querySelector(".this-year");

// FUNCTION SECTION

function speardSearchBar() {
  searchInputEl.focus();
}

function speardSearchInput() {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
}

function closedSearchInput() {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
}

// EVENT INIT

searchEl.addEventListener("click", speardSearchBar);
searchInputEl.addEventListener("focus", speardSearchInput);
searchEl.addEventListener("blur", closedSearchInput);
searchInputEl.addEventListener("blur", closedSearchInput );
thisYear.textContent = new Date().getFullYear();


