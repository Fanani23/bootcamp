const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at"];
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek + ' adalah hari kerja.')
            } else {
                reject(new Error('Hari ini bukan hari kerja!'))
            }
        }, 3000)
    })
}

try {
    let result = cekHariKerja('SeSabtu');
    console.log(result.data);
} catch(err){
    console.log({message: err.message});
} 