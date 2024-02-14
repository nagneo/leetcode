type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    if (arr.length === 0) {
        return [];
    } 
    if (arr.length < size) {
        return [arr];
    }
    // slice array for chunk
    const result = [];
    for(let i = 0; i < arr.length; i = i + size) {
        const chunk = arr.slice(i, i + size);
        result.push(chunk);
    }

    return result;
};
