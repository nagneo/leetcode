function fizzBuzz(n: number): string[] {
    const array = Array.from(Array(n), (_, index) => `${index + 1}`);
    for (let i = 1; i <= n / 3; i++) {
        array[3*i - 1] = "Fizz"
    }
    for (let i = 1; i <= n / 5; i++) {
        array[5*i -1] = "Buzz"
    }
    for (let i = 1; i <= n / 15; i++) {
        array[15*i -1] = "FizzBuzz"
    }
    return array
};