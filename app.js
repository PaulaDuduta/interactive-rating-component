const ratingNumber = document.querySelectorAll('.ratings label span');
const submitBtn = document.querySelector('.submitBtn');
let ratingValue = document.querySelector('.ratings .selected');
let selectedRating = document.querySelector('.selectedRating');

for (let i = 0; i < ratingNumber.length; i++) {
  ratingNumber[i].addEventListener(
    'click',
    function () {
      let elementSelect = document.querySelector('.selected');

      if (elementSelect && elementSelect !== ratingNumber[i]) {
        elementSelect.classList.remove('selected');
      }

      ratingNumber[i].classList.add('selected');

      submitBtn.addEventListener('click', submitMsg);
    },
    false,
  );
}

const submitMsg = function () {
  const beforeSubmit = document.querySelector('.beforeSubmit');
  const afterSubmit = document.querySelector('.afterSubmit');

  beforeSubmit.classList.add('d-none');
  afterSubmit.classList.remove('d-none');

  ratingScore();
};

const ratingScore = function () {
  let score = document.querySelectorAll('.ratings span');
  let scoreValue;

  for (let i = 0; i < score.length; i++) {
    scoreValue = score[i].textContent;

    if (i <= score.length) {
      let inputValue = document.querySelector('.ratings span.selected');
      selectedRating.innerText = `You selected ${
        inputValue.textContent
      } out of ${i + 1}`;
    }
  }
};
