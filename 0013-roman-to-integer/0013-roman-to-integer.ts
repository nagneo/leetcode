function romanToInt(s: string): number {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result += romanCharToInt(s[i], i === s.length -1 ? null : s[i+1])
  }  
  return result;
};

function romanCharToInt(ch: string, next: string) {
    switch(ch) {
        case 'I': 
            if (next === 'V' || next === 'X')
                return -1;
            return 1;
        case 'V':
            return 5;
        case 'X':
         if (next === 'L' || next === 'C')
                return -10;
            return 10;
        case 'L':
            return 50;
        case 'C':
            if (next === 'D' || next === 'M')
                return -100;
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
    }
}