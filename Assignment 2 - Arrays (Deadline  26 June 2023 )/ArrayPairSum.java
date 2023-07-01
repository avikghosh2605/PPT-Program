import java.util.Arrays;

public class ArrayPairSum {
    public int arrayPairSum(int[] nums) {
        // Sort the array in ascending order
        Arrays.sort(nums);

        int sum = 0;
        // Iterate over the sorted array, skipping every second element
        for (int i = 0; i < nums.length; i += 2) {
            // Add the smaller element of each pair to the sum
            sum += nums[i];
        }

        return sum;
    }

    public static void main(String[] args) {
        int[] nums = {1, 4, 3, 2};
        ArrayPairSum solution = new ArrayPairSum();
        int maxSum = solution.arrayPairSum(nums);
        System.out.println("Maximum sum: " + maxSum);
    }
}
