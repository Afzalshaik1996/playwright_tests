function fibonacci(n: number){
    let series= []
    let a = 0, b = 1
    let c

    for (let i = 0; i < n; i++) {
        series.push(a)
        c = a + b
        a = b;
        b = c;
    }

    return series;
}

console.log(fibonacci(10));

