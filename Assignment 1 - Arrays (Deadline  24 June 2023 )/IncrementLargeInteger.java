public class IncrementLargeInteger {
    public static int[] plusOne(int[] digits) {
        int n = digits.length;
        
        // Increment the least significant digit by 1
        digits[n - 1] += 1;
        
        // Propagate the carry
        int carry = digits[n - 1] / 10;
        digits[n - 1] %= 10;
        
        // Traverse the digits from right to left
        for (int i = n - 2; i >= 0; i--) {
            if (carry == 0) {
                break;
            }
            
            digits[i] += carry;
            carry = digits[i] / 10;
            digits[i] %= 10;
        }
        
        // If there's still a carry, create a new array with an additional digit
        if (carry > 0) {
            int[] result = new int[n + 1];
            result[0] = carry;
            System.arraycopy(digits, 0, result, 1, n);
            return result;
        }
        
        return digits;
    }

    public static void main(String[] args) {
        int[] digits = {1, 2, 3};
        int[] result = plusOne(digits);
        System.out.print("Output: [");
        for (int i = 0; i < result.length; i++) {
            if (i != result.length - 1) {
                System.out.print(result[i] + ", ");
            } else {
                System.out.print(result[i]);
            }
        }
        System.out.println("]");
    }
}
