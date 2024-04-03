function numberOfSteps(num: number): number {
    let steps = 0;
    while (num > 0) {
        const isEven = num % 2 === 0;
        if (isEven) {
            num = num / 2;
        } else {
            num = num - 1;
        }
        steps++;
    }

    return steps;
};