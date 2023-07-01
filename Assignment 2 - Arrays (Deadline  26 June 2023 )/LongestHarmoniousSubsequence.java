import java.util.HashMap;

public class LongestHarmoniousSubsequence {
    public int findLHS(int[] nums) {
        // Create a frequency map to count the occurrences of each number
        HashMap<Integer, Integer> freqMap = new HashMap<>();

        // Count the occurrences of each number in the array
        for (int num : nums) {
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }

        int longestSubsequence = 0;

        // Iterate over the numbers in the array
        for (int num : freqMap.keySet()) {
            // Check if the current number and the number one greater have a harmonious difference of 1
            if (freqMap.containsKey(num + 1)) {
                int currentSubsequence = freqMap.get(num) + freqMap.get(num + 1);
                longestSubsequence = Math.max(longestSubsequence, currentSubsequence);
            }
        }

        return longestSubsequence;
    }

    public static void main(String[] args) {
        int[] nums = {1, 3, 2, 2, 5, 2, 3, 7};
        LongestHarmoniousSubsequence solution = new LongestHarmoniousSubsequence();
        int longestSubsequence = solution.findLHS(nums);
        System.out.println("Length of the longest harmonious subsequence: " + longestSubsequence);
    }
}
