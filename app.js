// const ratingNumber = document.querySelectorAll('.ratings label span');
// const submitBtn = document.querySelector('.submitBtn');
// let ratingValue = document.querySelector('.ratings .selected');
// let selected = document.querySelector('input[attribute="checked"]');
// let data;

// for (let i = 0; i < ratingNumber.length; i++) {
//   ratingNumber[i].addEventListener(
//     'click',
//     function () {
//       let elementSelect = document.querySelector('.selected');

//       if (elementSelect && elementSelect !== this) {
//         elementSelect.classList.remove('selected');
//       }

//       this.classList.toggle('selected');

//       selected.setAttribute('attribute', 'checked');

//       submitBtn.addEventListener('click', submitMsg);
//     },
//     false,
//   );
// }

// const submitMsg = function () {
//   const beforeSubmit = document.querySelector('.beforeSubmit');
//   const afterSubmit = document.querySelector('.afterSubmit');

//   beforeSubmit.style.display = 'none';
//   afterSubmit.classList.remove('d-none');
// };

// if (selected) {
//   data = document.querySelector('input[attribute = "checked"]').value;
// }

// console.log(data);
