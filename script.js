const btn = document.querySelector('.button');
const result = document.querySelector('.result');

btn.addEventListener('click', palindrome);

function palindrome(){
    const word = document.querySelector('.input-text').value;
    let len = word.length;

    let start = word.substring(0, Math.floor(len/2)).toLowerCase(); 
    let end = word.substring(len - Math.floor(len/2));
    //let flip = end.split('').reverse().join('');
    //using spread operator
    let flip = [...end].reverse().join('');
    if(word == ''){
        result.style.display = "block";
        result.innerHTML = `<p>Please enter a word</p>`;
    }else if(start === flip){
        result.style.display = "block";
        result.innerHTML = `<p>${word} is a palindrome</p>`;
    }else{
        result.style.display = "block";
        result.innerHTML = `<p>${word} is not a palindrome</p>`;
    }
}