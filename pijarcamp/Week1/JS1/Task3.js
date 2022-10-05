// readline declaration
var readLine = require('readline');

// rl declaration for readline function
var rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});

// variable and input declaration
rl.question('Masukkan angka : ', (userInput) => {
    // variable declaration
    let printSegitiga = userInput;
    // check, if input value is not number
    // check, if input value is not minus
    if (!isNaN(printSegitiga) && printSegitiga>=0) {
        for (let i=1; i<=printSegitiga; i++) {
            let str = [];
            for (let j=1; j<=i; j++) {
                str.push(i);
            } console.log(str.join(""));
        };
    } else {
        console.log('Input salah!');
    } 
    // close
    rl.close();
});