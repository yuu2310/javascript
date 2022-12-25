// function hello(callback, lastname){
//   console.log('hello ' + callback(lastname));
// }

// function getName() {
//   return 'maron';
// }

// const getFirstName = function(){
//   return 'yuta';
// }

// hello(function(name){
//   return 'hiro' + name
// }, 'hosoya');



function doSometing(a, b, callback) {
  const result = callback(a,b);
  console.log(result);
}


function multiplication(a, b) {
  return a * b;
}

function plus(a,b) {
  return a + b;
}

doSometing(3, 5,  multiplication);
doSometing(7, 8 , plus);