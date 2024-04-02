function kWeakestRows(mat: number[][], k: number): number[] {
    const result = [];
    mat.forEach((row, index) => {
        const sum = row.reduce((s,a) => s+a);
        result.push([index, sum])
    })

    result.sort((a,b) => {
        return a[1] - b[1]
    })

    return result.map(i => i[0]).slice(0, k);
};