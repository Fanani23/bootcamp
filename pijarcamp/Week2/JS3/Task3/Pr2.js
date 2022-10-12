const namaSahabat = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataShbt = ['Eca', 'Sherlyn', 'Elsa', 'Dy', 'Dika', 'Niko'];
            let shbt = dataShbt.find((i) => {
                return i === name
            })
            if (shbt) {
                resolve(shbt);
            } else {
                reject(new Error('Bukan sahabat!'));
            }
        }, 2000)
    });
};

namaSahabat('Eca')
    .then((result) => {console.log(`Successfull - `, result)})
    .catch((error) => {console.log(`Unsuccessfull - `, error)})