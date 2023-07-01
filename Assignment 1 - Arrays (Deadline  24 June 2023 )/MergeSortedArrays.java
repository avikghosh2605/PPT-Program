public class MergeSortedArrays {
    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        // Start from the end of nums1 and compare elements from both arrays
        int i = m - 1;
        int j = n - 1;
        int k = m + n - 1;

        while (i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j]) {
                nums1[k--] = nums1[i--];
            } else {
                nums1[k--] = nums2[j--];
            }
        }

        // Copy the remaining elements from nums2 to nums1, if any
        while (j >= 0) {
            nums1[k--] = nums2[j--];
        }
    }

    public static void main(String[] args) {
        int[] nums1 = {1, 2, 3, 0, 0, 0};
        int m = 3;
        int[] nums2 = {2, 5, 6};
        int n = 3;

        merge(nums1, m, nums2, n);

        System.out.print("Output: [");
        for (int i = 0; i < nums1.length; i++) {
            if (i != nums1.length - 1) {
                System.out.print(nums1[i] + ", ");
            } else {
                System.out.print(nums1[i]);
            }
        }
        System.out.println("]");
    }
}
