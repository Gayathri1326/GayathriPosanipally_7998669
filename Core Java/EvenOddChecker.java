// EvenOddChecker.java

import java.util.Scanner;

public class EvenOddChecker {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Prompt user for input
        System.out.print("Enter an integer: ");
        int number = sc.nextInt();

        // Check even or odd using modulus operator
        if (number % 2 == 0) {
            System.out.println(number + " is an Even number.");
        } else {
            System.out.println(number + " is an Odd number.");
        }

        sc.close();
    }
}