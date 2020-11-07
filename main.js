/*Please start the below coding challenge
Description:
Write a script that creates an array with 10000 random words between 3 and 5 characters, and returns the number of words that are palindromes in that array;
Notes:
The code needs to be in javascript
You’ll need to return just the number of words
You have 30 mins, if you run out of time, submit the form anyway.
Once you click “Start” you cannot pause the countdown
Don’t delete the main function*/

const letras = 'abcdefghijklmnopqrstuvxyz';
let words = [];
let letra1 = '';
let letra2 = '';
let letra3 = '';
let letra4 = '';
let letra5 = '';
let word = '';
let random = 0;
let size = 0;
let cont = 0;
let temp = [];

const geraArrayPalavras = (tamanho) =>{
    for (i=0;i<tamanho;i++){
        size = Math.floor((Math.random()*(6-3))+3);
        temp = geraPalavra(size);
        words.push(temp);
        contaPalindromo(words);
    }
}

const geraPalavra = (size) => {
    if (size === 3){
        random = Math.floor(Math.random()*24);
        letra1 = letras.split("")[random];
        random = Math.floor(Math.random()*24); 
        letra2 = letras.split("")[random];
        random = Math.floor(Math.random()*24);
        letra3 = letras.split("")[random];
        word = letra1+letra2+letra3;    
        return word;
    }else if(size===4){
        random = Math.floor(Math.random()*24);
        letra1 = letras.split("")[random];
        random = Math.floor(Math.random()*24); 
        letra2 = letras.split("")[random];
        random = Math.floor(Math.random()*24);
        letra3 = letras.split("")[random];
        random = Math.floor(Math.random()*24);
        letra4 = letras.split("")[random];
        word = letra1+letra2+letra3+letra4; 
        return word;
    }else{
        random = Math.floor(Math.random()*24);
        letra1 = letras.split("")[random];
        random = Math.floor(Math.random()*24); 
        letra2 = letras.split("")[random];
        random = Math.floor(Math.random()*24);
        letra3 = letras.split("")[random];
        random = Math.floor(Math.random()*24);
        letra4 = letras.split("")[random];
        random = Math.floor(Math.random()*24); 
        letra5 = letras.split("")[random];
        word = letra1+letra2+letra3+letra4+letra5;    
        return word;
    }


}


const contaPalindromo = (str) =>{
    const contaPalindromo = (str) =>{
        for(var i = 0; i < str.length / 2; i++){
            if (str[i] != str[str.length - i - 1]) {
                return false
            }else{
                cont ++;
                return console.log(str); 
            }
        } 
    }    
}


geraArrayPalavras(10000);
console.log(cont);
    


