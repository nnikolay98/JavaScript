function petShopCost(input){
    let dogFoodPackages = Number(input[0]);
    let catFoodPackages = Number(input[1]);
    let dogFood = (dogFoodPackages*2.5);
    let catFood = (catFoodPackages*4);
    let total = (dogFood + catFood)
    console.log(`${total} lv.`);
}
petShopCost([5,4]);