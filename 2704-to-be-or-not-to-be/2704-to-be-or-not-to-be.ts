type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
   return {
       toBe: (a) => { if (val === a) return true; throw "Not Equal" },
       notToBe: (b) => { if (val !== b) return true; throw "Equal" } 
   } as ToBeOrNotToBe;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */