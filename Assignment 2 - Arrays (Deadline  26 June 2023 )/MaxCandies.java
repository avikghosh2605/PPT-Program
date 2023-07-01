import java.util.HashSet;

public class MaxCandies {
    public int maxCandies(int[] candyType) {
        // Calculate the maximum number of candies Alice can eat
        int maxEat = candyType.length / 2;

        // Create a set to store the unique types of candies
        HashSet<Integer> uniqueCandies = new HashSet<>();

        // Iterate over the candy types and add them to the set
        for (int candy : candyType) {
            uniqueCandies.add(candy);
        }

        // Return the minimum of the number of unique candies and the maximum number Alice can eat
        return Math.min(uniqueCandies.size(), maxEat);
    }

    public static void main(String[] args) {
        int[] candyType = {1, 1, 2, 2, 3, 3};
        MaxCandies solution = new MaxCandies();
        int maxTypes = solution.maxCandies(candyType);
        System.out.println("Maximum number of different types of candies: " + maxTypes);
    }
}
