public class Solution {
    public IList<bool> KidsWithCandies(int[] candies, int extraCandies) {
        var maxIfValue = candies.Max();
        var result = new List<Boolean>();
        foreach (var num in candies) {
            if (num + extraCandies < maxIfValue) {
                result.Add(false);
            } else {
                result.Add(true);
            }
        }
        return result; 
    }
}