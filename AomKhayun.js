function isEven (aom) { 
    if ( typeof aom === 'number' ) {
        return aom %2 === 0 
}
} 
console.log(isEven(2)); // true 
console.log(isEven(6)); // ture
console.log(isEven(3)); // false
