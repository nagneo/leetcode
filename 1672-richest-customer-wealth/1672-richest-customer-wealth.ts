function maximumWealth(accounts: number[][]): number {
    const wealthArr = [];
    
    for(let i = 0; i < accounts.length; i++) {
        let sum = accounts[i].reduce((a, b) => a + b, 0);
        wealthArr.push(sum);
    }
    
    return Math.max(...wealthArr)
};