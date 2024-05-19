public class Solution {
    public string ReverseVowels(string s) {
        int left = 0;
        int right = s.Length - 1;
        StringBuilder sb = new StringBuilder(s);
        while(left < right)
        {
            //if the character at the left index is not a vowel, we increment the left index
            if(!"aeiouAEIOU".Contains(sb[left]))
            {
                left++;
                continue;
            }
            //if the character at the right index is not a vowel, we decrement the right index
            if(!"aeiouAEIOU".Contains(sb[right]))
            {
                right--;
                continue;
            }
            //if the character at the left index is a vowel and the character at the right index is a vowel, we swap them
            char temp = sb[left];
            sb[left] = sb[right];
            sb[right] = temp;
            //increment the left index and decrement the right index
            left++;
            right--;
        }
        return sb.ToString();
    }
}