import java.util.ArrayList;
import java.util.List;

public class CombinationGenerator {
  public static List<List<Integer>> generateCombinations(int[] digits) {
    List<List<Integer>> combinations = new ArrayList<>();
    backtrack(new ArrayList<>(), digits, 0, combinations);
    return combinations;
  }

  private static void backtrack(List<Integer> currCombination, int[] options, int position,
      List<List<Integer>> combinations) {
    if (position == options.length) {
      combinations.add(new ArrayList<>(currCombination));
      return;
    }
    for (int i = 0; i < options.length; i++) {
      int digit = options[i];
      currCombination.add(digit);
      int[] nextOptions = removeElement(options, i);
      backtrack(currCombination, nextOptions, position + 1, combinations);
      currCombination.remove(currCombination.size() - 1);
    }
  }

  private static int[] removeElement(int[] array, int index) {
    int[] newArray = new int[array.length - 1];
    for (int i = 0, j = 0; i < array.length; i++) {
      if (i != index) {
        newArray[j++] = array[i];
      }
    }
    return newArray;
  }

  public static void main(String[] args) {
    int[] digits = { 1, 2, 3 };
    List<List<Integer>> combinations = generateCombinations(digits);

    for (List<Integer> combination : combinations) {
      System.out.println(combination);
    }
  }
}