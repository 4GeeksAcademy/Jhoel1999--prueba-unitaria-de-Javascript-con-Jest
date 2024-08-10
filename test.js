const {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} =require('./app.js');

test("Convertir un yen a pound", function() {

    const { fromYenToPound } = require('./app.js');
    const expected = (1000 * 0.87)/156.5;
    expect(fromYenToPound(1000)).toBe(5.559105431309904); 
})

test("Convertir un dollar a yen", function() {

    const { fromDollarToYen } = require('./app.js');
    const expected = (10 * 156.5)/1.07;
    expect(fromDollarToYen(10)).toBe(1462.6168224299065); 
})

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
