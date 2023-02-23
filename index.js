// phew… not a lot going on here. Please add some code!
const toggleBtn = document.querySelector('[data-js="bookmark-btn"]');
toggleBtn.addEventListener("click", handleBookMarkClick);

function handleBookMarkClick() {
  toggleBtn.classList.toggle("bookmark--active");
}

const answerBtnHidden = document.querySelector('[data-js="answer-btn"]');
answerBtnHidden.addEventListener("click", answerBtnClick);

function answerBtnClick() {
  // answerBtnHidden.classList.card("card__answer--active");

  if (answerBtnClick === true) {
  } else {
  }
}
