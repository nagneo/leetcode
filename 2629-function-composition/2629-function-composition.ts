type F = (x: number) => number;

function compose(functions: F[]): F {
    
    return function(x) {
        const length = functions.length;
        let y = x;
        for (let i= 0; i< functions.length; i++ ) {
            y = functions[length-i-1](y);
        }
        return y;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */