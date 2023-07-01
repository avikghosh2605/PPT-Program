import java.util.Arrays;

public class MinScoreDifference {
    public int minScore(int[] nums, int k) {
        int n = nums.length;
        
        // Sort the array in ascending order
        Arrays.sort(nums);
        
        // Update the first element by adding k and the last element by subtracting k
        nums[0] += k;
        nums[n - 1] -= k;
        
        // Calculate the initial minimum and maximum values
        int minVal = nums[0];
        int maxVal = nums[n - 1];
        
        // Find the updated minimum and maximum values
        for (int i = 1; i < n - 1; i++) {
            int num = nums[i];
            
            // Apply the operation to each element by adding or subtracting k
            if (num - k >= minVal && num - k <= maxVal) {
                nums[i] = num - k;
            } else if (num + k >= minVal && num + k <= maxVal) {
                nums[i] = num + k;
            }
            
            // Update the minimum and maximum values accordingly
            minVal = Math.min(minVal, nums[i]);
            maxVal = Math.max(maxVal, nums[i]);
        }
        
        // Return the difference between the maximum and minimum values
        return maxVal - minVal;
    }

    public static void main(String[] args) {
        int[] nums = {1};
        int k = 0;
        MinScoreDifference solution = new MinScoreDifference();
        int minScore = solution.minScore(nums, k);
        System.out.println("Minimum score: " + minScore);
    }
}
