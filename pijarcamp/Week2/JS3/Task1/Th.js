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

cekHariKerja('Senin')
    // untuk kondisi fulfilled atau operasi sukses
    .then((result) => {console.log(`Successfull - `, result)})
    // untuk kondisi failed atau operasi gagal
    .catch((error) => {console.log(`Unsuccessfull - `, error)})