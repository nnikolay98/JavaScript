function convertor(input) {
    let radians = Number(input[0]);
    let degrees = radians * 180 / Math.PI
    console.log(degrees);

}
convertor([3.1416])