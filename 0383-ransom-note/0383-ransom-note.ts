function canConstruct(ransomNote: string, magazine: string): boolean {
    const map = {};
    for (let i = 0; i < ransomNote.length; i++) {
        let isFind = false;
        let j = 0;
        while(j < magazine.length) {
            let findIdx = magazine.slice(j, magazine.length).indexOf(ransomNote[i]);
            if (findIdx >= 0) {
                if (!map[findIdx+j]) {
                    map[findIdx+j] = ransomNote[i]
                    isFind = true;
                    break;
                }
                else {
                    j = j + 1;
                }
            }
            else {
                break;
            }
        }
        if (!isFind) {
            return false;
        }
    }

    return true;
};