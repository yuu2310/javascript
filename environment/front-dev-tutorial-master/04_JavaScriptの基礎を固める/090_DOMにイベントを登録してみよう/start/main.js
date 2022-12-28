const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

function color(){
  h1.style.color = 'red';
  h1.style.backgroundColor = 'blue';
}

btn.addEventListener('click', color);