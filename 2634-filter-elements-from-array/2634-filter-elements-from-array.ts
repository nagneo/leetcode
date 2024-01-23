type Fn = (n: number, i: number) => boolean

function filter(arr: number[], fn: Fn): number[] {
    let result = []
    arr.forEach((item, index) => {
        if (fn(item, index)) {
            result.push(item)
        }
    })
    return result;
};