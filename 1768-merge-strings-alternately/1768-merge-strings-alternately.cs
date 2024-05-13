public class Solution {
    public string MergeAlternately(string word1, string word2) {
        var result = "";
        var lessLength = word1.Length < word2.Length ? word1.Length : word2.Length;
        for (var i = 0; i < lessLength; i++) {
            result += word1[i];
            result += word2[i];
        }
        var substring = word1.Length < word2.Length ? word2.Substring(word1.Length) : word1.Substring(word2.Length);
        if (!String.IsNullOrEmpty(substring)) {
            result += substring;
        }
        
        return result; 
    }
}