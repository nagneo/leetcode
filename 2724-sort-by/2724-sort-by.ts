type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
    return arr.sort(function(a,b) {
        const aValue = fn(a);
        const bValue = fn(b);
        if (aValue > bValue) {
            return 1;
        }
        else if (aValue === bValue) {
            return 0;
        }
        else return -1;
    })
};