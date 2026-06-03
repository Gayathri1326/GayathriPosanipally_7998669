public class VirtualThreadsExample {

    public static void main(String[] args) {

        long start = System.currentTimeMillis();

        for (int i = 1; i <= 100000; i++) {

            int task = i;

            Thread.startVirtualThread(() -> {

                System.out.println("Virtual Thread: " + task);
            });
        }

        long end = System.currentTimeMillis();

        System.out.println("Time Taken: " + (end - start) + " ms");
    }
}