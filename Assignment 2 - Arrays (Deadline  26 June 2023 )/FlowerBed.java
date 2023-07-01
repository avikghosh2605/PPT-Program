public class FlowerBed {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        int count = 0;
        int i = 0;
        while (i < flowerbed.length) {
            // Check if the current plot is empty and its adjacent plots are also empty
            if (flowerbed[i] == 0 && (i == 0 || flowerbed[i - 1] == 0) && (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)) {
                // Plant a flower in the current plot
                flowerbed[i] = 1;
                count++;

                // Check if the required number of flowers has been planted
                if (count >= n) {
                    return true;
                }
            }

            i++;
        }
        return false;
    }
    public static void main(String[] args) {
        int[] flowerbed = {1, 0, 0, 0, 1};
        int n = 1;
        FlowerBed solution = new FlowerBed();
        boolean canPlace = solution.canPlaceFlowers(flowerbed, n);
        System.out.println("Can place " + n + " flowers? " + canPlace);
    }
}
