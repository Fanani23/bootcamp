const getMonth = (callback) => {
    setTimeout(() => {
        let err = false;
        let month = [
            'January', 'Ferbuary', 'March',
            'April', 'May', 'June', 'July',
            'August', 'September', 'October',
            'November', 'Desember'
        ];

        let displayMonth = month.map((i) => {
            return `Month : ${i} \n`;
        });

        if (!err) {
            callback(null, displayMonth);
        } else {
            callback(new Error('Sorry data not found!'), [])
        }
    }, 4000);
};

const print = (err, displayMonth) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log(displayMonth.toString(). split(',').join(''));
    }
};

getMonth(print)