//Homework
const fromDollarToYen = function(valueInDollar) {
    let valueInYen =(valueInDollar * 156.5)/1.07;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound =(valueInYen * 0.87)/156.5;
    return valueInPound;
}


// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}