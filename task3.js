function outsideFn(num1) {
    return function insideFn(num2) {
        return num1 + num2
    }
}

console.log(outsideFn(20)(30))