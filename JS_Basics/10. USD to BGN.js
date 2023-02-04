function convertor(input){
    let usd = Number(input[0]);
    let oneUsdLv = 1.79549
    let usdToLeva = usd*oneUsdLv
    console.log(usdToLeva);
}
convertor([22])