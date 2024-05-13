public class Solution {
    public string GcdOfStrings(string str1, string str2) {
        if (!(str1+str2).Equals(str2+str1))  {
            return string.Empty;
        }

        var gcd = GetGcd(str1.Length, str2.Length);
        return str2.Substring(0, gcd);
    }

    private int GetGcd(int n1, int n2) {
        if (n2 == 0) return n1;
        else return GetGcd(n2, n1 % n2);
    }
}