type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    interface memoizedMap {
        [index:string]:number;
    }
    const map: memoizedMap = {};
    let callCount = 0;
    return function(...args) {
        const key = JSON.stringify(args);
        if (key in map) {
            return map[key];
        }
        const result = fn(...args);
        map[key] = result;
        this.callCount++;
        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */