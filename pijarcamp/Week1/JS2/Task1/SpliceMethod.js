// Method splice
/*
Digunakan untuk menambahkan, menghapus, atau menimpa index dari sebuah array.
*/
// Syntax
// array.splice(index, berapaBanyak, item1, ..., itemn);
// Contoh penggunaan
let contohSplice = ['Pramudia', 'Marcheilla', 'Dy', 'Sherlyn'];
console.log(contohSplice);
// menambahkan item
contohSplice.splice(0, 1);
console.log(contohSplice);
// menambahkan item
contohSplice.splice(0, 0, 'Pramudia');
console.log(contohSplice);
// menimpa item
contohSplice.splice(3, 4, 'Elsa');
console.log(contohSplice);
