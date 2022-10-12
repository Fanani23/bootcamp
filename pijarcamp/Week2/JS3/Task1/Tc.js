const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at"];
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(`${cek} adalah hari kerja.`)
            } else {
                reject(new Error('Hari ini bukan hari kerja!'))
            }
        }, 3000)
    })
}

const cekHari = async() => {
    try {
        // untuk kondisi operasi berhasil
        const response = await cekHariKerja('SSabtu');
        console.log(response);
    } catch(err){
        // untuk kondisi operasi gagal
        console.log({message: err.message});
    } 
}

cekHari()
