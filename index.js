const btnCatch = document.getElementById('btnCatch');

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

btnCatch.addEventListener('mouseover', () => {
  btnCatch.style.left = getRandomNumber(window.innerWidth - btnCatch.clientWidth) + 'px';
  btnCatch.style.top =  getRandomNumber(window.innerHeight - btnCatch.clientHeight) + 'px';
});

