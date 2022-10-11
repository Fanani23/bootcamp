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
    .then((result) => {console.log(`Successfull - `, result)})
    .catch((error) => {console.log(`Unsuccessfull - `, error)})