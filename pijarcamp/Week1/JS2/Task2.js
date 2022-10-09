// var readLine = require('readline');
// var rl = readLine.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });
// rl.question('Masukkan inisial : ', (initialsInput) => {
//     var initials = initialsInput;
//     console.log(initials);
//     rl.question('Masukkan jumlah : ', (ammountInput) => {
//         var ammount = ammountInput;
//         console.log(ammount);
//         const searchName = (initials, ammount, callback) => {
//             console.log(searchName);
//         };
//         rl.close();
//     });
// });
var readLine = require('readline');
var rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question('Masukkan inisial : ', (initialsInput) => {
    rl.question('Masukkan jumlah : ', (ammountInput) => {
        const searchName = (initials, ammount, callback) => {
            const name = [
                'Abigail', 'Alexandra', 'Alison',
                'Amanda', 'Angela', 'Bella',
                'Carol', 'Caroline', 'Carolyn',
                'Deirdre', 'Diana', 'Elizabeth',
                'Ella', 'Faith', 'Olivia', 'Penelope'
            ];
        
            let result = name.filter((i) =>
                i.toLowerCase().includes(initials)
            );
            callback(result, ammount);
        };
        
        const displaySearchName = (result, ammount) => {
            console.log(result.slice(0, ammount));
        };

        let initials = initialsInput;
        let ammount = ammountInput;
        
        searchName(initials, ammount, displaySearchName);

        rl.close();
    });
});
