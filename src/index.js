const Bamadash = {
    calc(operand1, operand2, operator) {
        switch (operator) {
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '*':
                return operand1 * operand2;
            case '/':
                return operand1 / operand2;
            default:
                throw new Error('Invalid operator');
        }
    },
    compact(array){
        return array.filter(Boolean);
    },
    intersection(array1,array2, isStrict){
        
    },
    filter(array) {
        
    },
    size(collection) { 
        if (typeof (collection) === "object") return Object.keys(collection).length;
        else {
            if(collection.length==undefined){
                return 0;
            }
            return collection.length;
        }

        
    },
    castArray(value) {
        if (Array.isArray(value)) return value;
        else return [value];
        
    }
}

module.exports = Bamadash;

console.log(Bamadash.castArray(1)); 
console.log (Bamadash.castArray({ 'a': 1 })); 
console.log(Bamadash.castArray('abc')); 
console.log(Bamadash.castArray()); 
console.log(Bamadash.castArray([1, 2])); 


