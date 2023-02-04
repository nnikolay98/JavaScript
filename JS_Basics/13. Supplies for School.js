function supplies(input) {
    let pricePen = 5.80
        let qntyPen = Number(input[0]);
            let totalPen = pricePen * qntyPen
    let priceMarkers = 7.20
        let qntyMarkers = Number(input[1]);
            let totalMarkers = priceMarkers * qntyMarkers
    let detergent = 1.20
        let qntyDetergent = Number(input[2]);
            let totalDetergent = detergent * qntyDetergent
                let totalsupplies = totalPen + totalMarkers + totalDetergent
            let discount = Number(input[3]);
            let discountPercentage = discount / 100
            let discountIn = totalsupplies * discountPercentage
            let total = totalsupplies - discountIn
console.log(total);

}
supplies([2,3,4,25])