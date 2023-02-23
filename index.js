// phew… not a lot going on here. Please add some code!
const toggleBtn = document.querySelector('[data-js="bookmark-btn"]');
toggleBtn.addEventListener("click", handleBookMarkClick);

function handleBookMarkClick() {
  toggleBtn.classList.toggle("bookmark--active");
}
