const divideSort = (number) => {
    let temp = number.toString().split('0');
    let result = '';

    for (let i in temp) {
        let j = ([...temp[i]]).sort();
        result += j.join('');
    }
    return console.log(parseInt(result));
}

divideSort(5956560159466056)