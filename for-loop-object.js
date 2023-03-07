//object declare
var shoppingCart = {
    books: 4,
    sunglass: 2,
    keyboard: 1,
    mouse: 1,
    pen: 25,
    shoes: 3
}

//put keys in a variable
//when all the keys are saved in a variable then that variable act as en array
var property = Object.keys(shoppingCart);
// console.log(property);

//for loop in object
//variable that store the keys is acting as an array
for (i = 0; i < property.length; i++) {
    var propertyName = property[i];
    console.log(propertyName);
    var value = shoppingCart[propertyName];
    console.log(value);
}

