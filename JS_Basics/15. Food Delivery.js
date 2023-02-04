function delivery(input) {
    let chickenMenu = 10.35;
    let qntyChicken = Number(input[0]);
        let totalChicken = chickenMenu * qntyChicken;
    let fishMenu = 12.40;
    let qntyFish = Number(input[1]);
        let totalFish = fishMenu * qntyFish;
    let vegeterianMenu = 8.15
    let qntyVegeterian = Number(input[2]);
        let totalVegeterian = vegeterianMenu*qntyVegeterian
    let total = totalChicken + totalFish + totalVegeterian
    let desert = 0.2 * total
    let delivery = 2.5
    let totalPrice = total + desert + delivery
    console.log(totalPrice);
}
delivery([2,4,3])