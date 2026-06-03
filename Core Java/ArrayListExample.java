import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListExample {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        ArrayList<String> studentNames = new ArrayList<>();

        System.out.print("How many names do you want to add? ");
        int n = sc.nextInt();

        sc.nextLine();

        for (int i = 0; i < n; i++) {

            System.out.print("Enter name " + (i + 1) + ": ");

            String name = sc.nextLine();

            studentNames.add(name);
        }

        System.out.println("Student Names:");

        for (String name : studentNames) {

            System.out.println(name);
        }

        sc.close();
    }
}