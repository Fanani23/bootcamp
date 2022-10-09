
const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAkhir > nilaiAwal) {
        if (dataArray.length > 5) {
            let result = [];
            let i, j;
            for (i=0; i<dataArray.length; i++) {
                j = dataArray[i];
                if (nilaiAwal < j && j < nilaiAkhir) {
                    result.push(j);
                }
            } console.log(result);
            if (result.length == 0) {
                console.log('Data tidak ditemukan!');
            } else {
                console.log('Data ditemukan!');
            }
         } else {
            console.log('Jumlah angka dalam dataArray harus lebih dari 5!');
        }
    } else {
        console.log('Nilai akhir harus lebih besar dari nilai awal!');
    }
};

seleksiNilai(5, 20, [2, 4, 8, 25, 10, 9])