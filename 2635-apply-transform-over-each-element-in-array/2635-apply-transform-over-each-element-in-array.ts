function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const result = [];
    arr.forEach((item, index) => {
        result[index] = fn(item, index);
    });

    return result;
};