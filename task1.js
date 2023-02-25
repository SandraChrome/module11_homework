const myNewArray = [0, 0, 99, 1, 2, 3, '', null, undefined, 'qwerty', 8, false, 10]

function onlyNumber(array) {
    return array.filter(item => typeof item === 'number')
}

function onlyZero(array) {
    return array.filter(item => item === 0)
}

function onlyEven(array) {
    return array.filter(item => item % 2 === 0 && item !== 0)
}

function onlyOdd(array) {
     return array.filter(item => item % 2 !== 0)
}

function arrayItems(array) {
    onlyNumber(array)
    onlyZero(onlyNumber(array))
    onlyEven(onlyNumber(array))
    onlyOdd(onlyNumber(array))
    console.log(`Чётных: ${onlyEven(onlyNumber(array)).length}, нечётных: ${onlyOdd(onlyNumber(array)).length}, нулей: ${onlyZero(onlyNumber(array)).length}.`)
}

arrayItems(myNewArray)