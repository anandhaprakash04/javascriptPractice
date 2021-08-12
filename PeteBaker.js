// https://www.codewars.com/kata/525c65e51bf619685c000059/javascript


function cakes(recipe, available) {
    let cakes = [];
    for(ingredient of Object.keys(recipe)){
        cakes.push(Math.floor(available[ingredient]/recipe[ingredient]) || 0);
    }
    // console.log(cakes);
    // console.log(Math.min(...cakes));
    return Math.min(...cakes)
}

// recipe = {flour: 500, sugar: 200, eggs: 1};
// available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};

cakes(recipe, available)
