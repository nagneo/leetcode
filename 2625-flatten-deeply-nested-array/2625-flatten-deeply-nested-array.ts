type MultiDimensionalArray = (number | MultiDimensionalArray)[];

// 배열을 n차원까지 펼치는 함수 - recursive하게 펼칠까 n-1까지 펼치도록
var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    // 종료 조건
    if (n === 0) {
        return arr;
    }

    let result = [];
    const traverse = (arr, n) => {
        for (let i in arr) {
            if ( n > 0 && Array.isArray(arr[i]))
                traverse(arr[i], n-1)
            else
                result.push(arr[i])
        }
    }

    traverse(arr, n);
    return result; 
};