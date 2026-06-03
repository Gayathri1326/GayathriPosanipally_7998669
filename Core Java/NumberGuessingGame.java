import java.util.Random;
import java.util.Scanner;

public class NumberGuessingGame {

    public static void main(String[] args) {

        Random rand = new Random();
        Scanner sc = new Scanner(System.in);

        int randomNumber = rand.nextInt(100) + 1;
        int guess;

        System.out.println("Guess a number between 1 and 100");

        do {
            System.out.print("Enter your guess: ");
            guess = sc.nextInt();

            if (guess > randomNumber) {
                System.out.println("Too high!");
            } else if (guess < randomNumber) {
                System.out.println("Too low!");
            } else {
                System.out.println("Correct! You guessed the number.");
            }

        } while (guess != randomNumber);

        sc.close();
    }
}