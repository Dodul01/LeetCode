var createCounter = function(n) {
    return function () {
        return console.log(n++);
    }
};

var counter = createCounter(10);
counter(); // Logs: 1
counter(); // Logs: 2
counter(); // Logs: 3