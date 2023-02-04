function yardGreening(input) {
    let sqMeters = Number(input[0]);
    let priceOneSq = 7.61
    let total = sqMeters*priceOneSq
    let discount = total*0.18
    let endprice = total-discount
    console.log(`The final price is: ${endprice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening([550])