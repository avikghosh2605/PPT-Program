public class RemoveElement {
    public static int removeElement(int[] nums, int val) {
        int k = 0;  // Number of elements not equal to val

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != val) {
                nums[k] = nums[i];
                k++;
            }
        }

        return k;
    }

    public static void main(String[] args) {
        int[] nums = { 3, 2, 2, 3 };
        int val = 3;

        int remaining = removeElement(nums, val);
        System.out.println("Output: " + remaining + ", nums = " + arrayToString(nums, remaining));
    }

    private static String arrayToString(int[] nums, int length) {
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        for (int i = 0; i < length; i++) {
            sb.append(nums[i]);
            if (i != length - 1) {
                sb.append(", ");
            }
        }
        sb.append("]");
        return sb.toString();
    }
}
