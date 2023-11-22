// Create an array with boolean values
let booleanArray = [true, false, true, false, true, true, false];

// Function to count the number of true values in the array
function countValues(array) {
    let trueValues = array.filter(value => value === true);
    return trueValues.length;
}

function countFalseValues(array) {
    let falseValues = array.filter(value => value === false);
    return falseValues.length;
}
// Display the count of true values
let trueCount = countValues(booleanArray);
console.log(`Number of true values: ${trueCount}`);

// Display the count of false values
let falseCount = countFalseValues(booleanArray);
console.log(`Number of false values: ${falseCount}`);