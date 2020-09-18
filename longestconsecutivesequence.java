//Java Solution

class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            set.add(num);
        }
        
        int ans = 0;
        
        for (Integer num : set) {
            if (!set.contains(num - 1)) {
                int currNum = num;
                int currStreak = 1;
                
                while (set.contains(currNum + 1)) {
                    currNum++;
                    currStreak++;
                }
                
                ans = Math.max(ans, currStreak);
            }
        }
        
        return ans;
    }
}
