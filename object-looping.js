//object declare
var shoppingCart = {
    books: 4,
    sunglass: 2,
    keyboard: 1,
    mouse: 1,
    pen: 25,
    shoes: 3
}

//get property
const property = Object.keys(shoppingCart);
console.log(property);

//get values
const values = Object.values(shoppingCart);
console.log(values);

//property name print using for loop
//to use for loop we have to put keys into a variable first and then we can use it

for (i = 0; i < property.length; i++) {
    // console.log(property[i]);
    var properName = property[i];
    var propertyValue = shoppingCart[properName];
    console.log(properName, propertyValue)
}