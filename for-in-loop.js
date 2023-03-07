//declare object
var shoppingCart = {
    books: 4,
    sunglass: 2,
    keyboard: 1,
    mouse: 1,
    pen: 25,
    shoes: 3
}

//for in loop
for (var propertyName in shoppingCart) {
    var value = shoppingCart[propertyName];
    console.log(propertyName, value);
}