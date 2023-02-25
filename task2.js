function testNumber(num) {
    if (num > 1000) return 'Данные неверны'
    if (num <= 1) return 'Не простое'
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return 'Не простое'
        }
    }
    return 'Простое'
}

console.log(testNumber(1001))