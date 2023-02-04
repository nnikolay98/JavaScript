function water(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let heigth = Number(input[2]);
    let extra = Number(input[3]);
    let volume = lenght * width * heigth
    let volumeLiters = volume/1000
    let extraIn = extra / 100
    let needed = volumeLiters * (1-extraIn)
    console.log(needed);

}
water([85,75,47,17])