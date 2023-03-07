//object declare
var shoppingCart = {
    sunglass: 2,
    mouse: 1,
    pen: 25
}
//properties print from object
// console.log(shoppingCart.pen);

var penCount = shoppingCart.pen;
console.log(penCount);

//second way to print it
var penCount2 = shoppingCart['pen'];
console.log(penCount2);

//show the properties of the object
var properties = Object.keys(shoppingCart);
console.log(properties);

//show the property value
var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);

//show property value by using newvariable
var propertyName = 'pen';
var penNumber = shoppingCart[propertyName];
console.log(penNumber);

//object print
console.log(shoppingCart);

//set property value

//option 1 using dot notation
shoppingCart.sunglass = 5;
//option 2 using property name as array
shoppingCart['mouse'] = 5;
//option 3 using variable 
shoppingCart[propertyName] = 27;
//print
console.log(shoppingCart);