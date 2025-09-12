'use strict';

const form = document.querySelector('.questions__form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  this.reset();
});
