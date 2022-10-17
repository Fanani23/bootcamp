const pijarcamp = (price, voucher, distance, tax) => {
    if (voucher == "PIJARFOOD5" && price >= 50000) {
        let discountAmmount = price * (50 / 100);
        if (discountAmmount > 50000) {
            discountAmmount = 50000;
        }
        console.log('Harga          : ', price);
        console.log('Potongan       : ', discountAmmount); 

        if (distance <= 2) {
            var distanceAmmountTotal = 5000;
            console.log('Biaya antar    : ', distanceAmmountTotal);
        } else if (distance > 2) {
            var str = 0;
            for (let i=2; i<distance; i++) {
                str += 3000;
            }
            var distanceAmmount = 5000;
            var distanceAmmountTotal = distanceAmmount + str;
            console.log('Biaya antar    : ', distanceAmmountTotal);
        } else {
            var distanceZero = 0;
            console.log('Biaya antar    : ', distanceZero);
        }
        
        if (tax != true) {
            var taxZero = 0;
            console.log('Pajak          : ', taxZero);
        } else {
            var taxAmmount = price * (5 / 100);
            console.log('Pajak          : ', taxAmmount);
        }

        let subTotal = discountAmmount+distanceAmmountTotal+taxAmmount;
        console.log('Sub total      : ', subTotal);
        

    } else if (voucher == "DITRAKTIRPIJAR" && price >= 25000) {
        let discountAmmount = price * (60 / 100);
        if (discountAmmount > 30000) {
            discountAmmount = 30000;
        }
        console.log('Harga          : ', price);
        console.log('Potongan       : ', discountAmmount);

        if (distance <= 2) {
            var distanceAmmountTotal = 5000;
            console.log('Biaya antar    : ', distanceAmmountTotal);
        } else if (distance > 2) {
            var str = 0;
            for (let i=2; i<distance; i++) {
                str += 3000;
            }
            var distanceAmmount = 5000;
            var distanceAmmountTotal = distanceAmmount + str;
            console.log('Biaya antar    : ', distanceAmmountTotal);
        } else {
            var distanceZero = 0;
            console.log('Biaya antar    : ', distanceZero);
        }

        if (tax != true) {
            var taxZero = 0;
            console.log('Pajak          : ', taxZero);
        } else {
            var taxAmmount = price * (5 / 100);
            console.log('Pajak          : ', taxAmmount);
        }

        let subTotal = discountAmmount+distanceAmmountTotal+taxAmmount;
        console.log('Sub total      : ', subTotal);

    } else {
        if (voucher == "") {
            console.log('Harga          : ', price);
            if (distance <= 2) {
                var distanceAmmountTotal = 5000;
                console.log('Biaya antar    : ', distanceAmmountTotal);
            } else if (distance > 2) {
                var str = 0;
                for (let i=2; i<distance; i++) {
                    str += 3000;
                }
                var distanceAmmount = 5000;
                var distanceAmmountTotal = distanceAmmount + str;
                console.log('Biaya antar    : ', distanceAmmountTotal);
            } else {
                var distanceZero = 0;
                console.log('Biaya antar    : ', distanceZero);
            }
            
            if (tax != true) {
                var taxZero = 0;
                console.log('Pajak          : ', taxZero);
            } else {
                var taxAmmount = price * (5 / 100);
                console.log('Pajak          : ', taxAmmount);
            }
    
            let subTotal = price-(distanceAmmountTotal+taxAmmount);
            console.log('Sub total      : ', subTotal);
        }
    }
}

pijarcamp(75000, "PIJARFOOD5", 1, true)
console.log("....")
pijarcamp(30000, 'DITRAKTIRPIJAR', 1, true)
console.log("....")
pijarcamp(70000, '', 1, true)
