function equipment(input){
    let yearlyTax = Number(input[0]);
    let shoesPercentage = yearlyTax * 0.4
    let shoesPrice = yearlyTax - shoesPercentage;
    let clothesPercentage = shoesPrice * 0.2
    let clothesPrice = shoesPrice - clothesPercentage
    let ball = clothesPrice / 4
    let acsecories = ball / 5
    let total = yearlyTax + shoesPrice + clothesPrice + ball + acsecories
    console.log(total);
}
equipment([365])