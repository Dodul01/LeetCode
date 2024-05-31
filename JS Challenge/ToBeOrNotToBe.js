/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe: (compareVal) => {
            if (val === compareVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: (compareVal) => {
            if (val !== compareVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    }
};

try {
    console.log(expect(5).notToBe(5)); // This will throw an error "Equal"
} catch (error) {
    console.log({ error: error.message }); // This will print { error: "Equal" }
}


try {
    console.log(expect(5).toBe(5)); 
} catch (error) {
    console.log({ error: error.message });
}

try {
    console.log(expect(5).notToBe(null));
} catch (error) {
    console.log({ error: error.message });
}
