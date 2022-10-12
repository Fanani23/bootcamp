// readline declaration
import { createInterface } from 'readline';

// rl declaration for readline function
var rl = createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question('Masukan kata : ',  (wordInput) => {
    let word = wordInput;
    const checkPalindrome = () => {
        let reverseWord = word.toLowerCase().split('').reverse().join('')
        if (word.toLowerCase() !== reverseWord) {
            console.log(reverseWord, 'is not palindrome!');
        } else {
            console.log(reverseWord, 'is palindrome.');
        }
        return word.toLowerCase() === reverseWord;
    };
    checkPalindrome(word);
    rl.close();
});