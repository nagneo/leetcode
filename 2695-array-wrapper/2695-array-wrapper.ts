class ArrayWrapper {
    private numbers;
    constructor(nums: number[]) {
        this.numbers = nums;
    }
    
    valueOf(): number {
        return this.numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
},0);
    }
    
    toString(): string {
        return JSON.stringify(this.numbers);
    }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */