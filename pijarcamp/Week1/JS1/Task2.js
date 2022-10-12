// readline declaration
import { createInterface } from 'readline';

// rl declaration for readline function
var rl = createInterface({
    input : process.stdin,
    output : process.stdout
});

// variable and input declaration
rl.question('Masukkan angka : ', (userInput) => {
    // printGenapGanjil declaration
    let printGenapGanjil = userInput;
    // check, if input value is not number
    // check, if input value is not minus
    if (!isNaN(printGenapGanjil) && printGenapGanjil>=0) {
        for (let i=1; i<=printGenapGanjil; i++) {
            // check, is the input value even or odd
            if (i % 2 === 0) {
                // if input value even
                console.log(i + ' merupakan bilangan genap');
            } else {
                // if input value odd
                console.log(i + ' merupakan bilangan ganjil');
            };
        };
    } else {
        // if the input is wrong
        console.log('Input salah!');
    };
    // close
    rl.close();
});


