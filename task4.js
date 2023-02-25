function counter(a, b) {
    let timer = setInterval(() => {
        if (a === b) {
            clearInterval(timer)
        }
        console.log(a++)
    }, 1000)
}

counter(10, 12)