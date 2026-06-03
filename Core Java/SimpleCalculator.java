// SimpleCalculator.java

import java.util.Scanner;

public class SimpleCalculator {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Input two numbers
        System.out.print("Enter first number: ");
        double num1 = sc.nextDouble();

        System.out.print("Enter second number: ");
        double num2 = sc.nextDouble();

        // Choose operation
        System.out.println("Choose an operation:");
        System.out.println("+ for Addition");
        System.out.println("- for Subtraction");
        System.out.println("* for Multiplication");
        System.out.println("/ for Division");

        System.out.print("Enter your choice: ");
        char operator = sc.next().charAt(0);

        double result;

        // Perform operation
        switch (operator) {

            case '+':
                result = num1 + num2;
                System.out.println("Result = " + result);
                break;

            case '-':
                result = num1 - num2;
                System.out.println("Result = " + result);
                break;

            case '*':
                result = num1 * num2;
                System.out.println("Result = " + result);
                break;

            case '/':
                if (num2 != 0) {
                    result = num1 / num2;
                    System.out.println("Result = " + result);
                } else {
                    System.out.println("Division by zero is not allowed.");
                }
                break;

            default:
                System.out.println("Invalid operator.");
        }

        sc.close();
    }
}