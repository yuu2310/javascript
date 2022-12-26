const str = 'animation';
const strArry = str.split('');

function tag(accu, curr) {
    return `${accu}<${curr}>`;
}

function reduce(arry, callback, defaultValue) {
    let accu =  defaultValue;
    
    for(let i = 0; i < accu.length; i++){
        let curr = arry[i];
        accu = callback(accu, curr);
    }
    
    return accu;
}

const result = reduce(strArry, tag, "");
console.log(result);

