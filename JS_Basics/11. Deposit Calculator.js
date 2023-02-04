function calculate(input) {
    let depositSum = Number(input[0]);
    let period = Number(input[1]);
    let interest = Number(input[2]);
    let interestPercentage = interest / 100
    let accuredInterest =  depositSum * interestPercentage
    let monthlyInterest = accuredInterest / 12
    let total = depositSum + period * monthlyInterest;
    console.log(total);

}
calculate([200, 3, 5.7,])