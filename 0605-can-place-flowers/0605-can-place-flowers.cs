public class Solution {
    public bool CanPlaceFlowers(int[] flowerbed, int n) {
        if (n == 0) {
            return true;
        }
        var sum = flowerbed.Sum();
        var max = flowerbed.Length/2 + (flowerbed.Length%2); 
        if (n + sum > max) {
            return false;
        }

        var remain = n;
        var cIdx = 0;
        var nIdx = cIdx + 1;
        while(cIdx < flowerbed.Length) {
            nIdx = cIdx + 1;
            if (flowerbed[cIdx] == 1) {
                cIdx += 2;
                continue;
            }
            else if (nIdx < flowerbed.Length && flowerbed[nIdx] == 1){
                Console.WriteLine(cIdx);
                cIdx += 1;
                continue;
            }
            else { 
                remain--; // cIndex에 심음
                cIdx += 2;
                if (remain == 0) {
                    break;
                }
            }
        }

        return remain == 0;
    }
}