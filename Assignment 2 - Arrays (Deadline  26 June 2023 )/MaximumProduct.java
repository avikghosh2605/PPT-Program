import java.util.Arrays;

public class MaximumProduct {
    public int maximumProduct(int[] nums) {
        // Sort the array in ascending order
        Arrays.sort(nums);

        // Calculate the product of the last three numbers (the largest numbers)
        int product1 = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];

        // Calculate the product of the first two numbers (the smallest numbers) and the last number (the largest number)
        int product2 = nums[0] * nums[1] * nums[nums.length - 1];

        // Return the maximum product of the two calculated products
        return Math.max(product1, product2);
    }
    public static void main(String[] args) {
        int[] nums = {1, 2, 3};
        MaximumProduct solution = new MaximumProduct();
        int maxProduct = solution.maximumProduct(nums);
        System.out.println("Maximum product: " + maxProduct);
    }
}