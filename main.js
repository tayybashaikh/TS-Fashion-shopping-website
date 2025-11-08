const icon = document.querySelector('.icon');
const ul = document.querySelector('nav ul');

icon.addEventListener('click', () => {
  ul.classList.toggle('showData');
});