/*Please start the below coding challenge
Description:
Write a script that creates an array with 10000 random words between 3 and 5 characters, and returns the number of words that are palindromes in that array;
Notes:
The code needs to be in javascript
You’ll need to return just the number of words
You have 30 mins, if you run out of time, submit the form anyway.
Once you click “Start” you cannot pause the countdown
Don’t delete the main function*/

const geraTodasAsLetras = () => {
    let arrayLetras = []
    for (let letra = 97; letra < 123; letra++) {
        arrayLetras.push(String.fromCharCode(letra))
    }
    return arrayLetras
}

//const letras = 'abcdefghijklmnopqrstuvxyz';
const letras = geraTodasAsLetras()
let cont = 0;

const geraTamanhoAleatório = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const pegaLetraAleatória = () => letras[Math.floor(Math.random() * 24)];

const geraArrayPalavras = (tamanho) => {
    let words = [];
    for (let i = 0; i < tamanho; i++) {
        const size = geraTamanhoAleatório(3, 6)
        const temp = geraPalavra(size);
        words.push(temp);
        contaPalindromo(words);
    }
}

const geraPalavra = (size) => {
    let letrasArray = []
    let word = '';

    for (let i = 0; i < size; i++) {
        letrasArray.push(pegaLetraAleatória())
    }

    word = letrasArray.join('')
    return word;
}

const contaPalindromo = (str) => {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - i - 1]) {
            return false
        } else {
            cont++;
            return console.log(str);
        }
    }

}


geraArrayPalavras(10000);
console.log(cont);


