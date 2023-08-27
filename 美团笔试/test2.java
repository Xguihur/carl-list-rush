import java.util.ArrayList;
import java.util.List;

public class Main {
  public static void main(String[] args) {
    int[] nums = { 1, 2, 3, 4, 5 };
    List<Integer> choices = new ArrayList<>();
    List<Integer> permutations = new ArrayList<>();
    // Generate all possible combinations of 3 numbers
    generateCombinations(nums, choices, 0, 3);
    // Generate all possible permutations of 3 numbers from each combination
    for (int i = 0; i < choices.size(); i += 3) {
      List<Integer> temp = new ArrayList<>();
      generatePermutations(choices, temp, i, i + 3, 3, permutations);
    }
    // Sort and print the permutations
    permutations.sort(Integer::compareTo);
    for (Integer num : permutations) {
      System.out.println(num);
    }
  }

  // Generate combinations of k numbers from the given array
  public static void generateCombinations(int[] nums, List<Integer> choices, int start, int k) {
    if (k == 0) {
      return;
    }
    for (int i = start; i <= nums.length - k; i++) {
      choices.add(nums[i]);
      generateCombinations(nums, choices, i + 1, k - 1);
      choices.remove(choices.size() - 1);
    }
  }

  // 翻页
  // Generate permutations of k numbers from the given choices
  public static void generatePermutations(List<Integer> choices, List<Integer> temp, int start, int n, int k,
      List<Integer> permutations) {
    if (k == 0) {
      int num = 100 * temp.get(0) + 10 * temp.get(1) + temp.get(2); // Construct the three-digit number
      permutations.add(num);
      return;
    }
    for (int i = start; i < n; i++) {
      temp.add(choices.get(i));
      generatePermutations(choices, temp, i + 1, n, k - 1, permutations);
      temp.remove(temp.size() - 1);
    }
  }
}