// ReflectionExample.java

import java.lang.reflect.Method;

class Test {

    public void display() {

        System.out.println("Method invoked using Reflection");
    }
}

public class ReflectionExample {

    public static void main(String[] args) {

        try {

            // Load class dynamically
            Class<?> cls = Class.forName("Test");

            // Create object
            Object obj = cls.getDeclaredConstructor().newInstance();

            // Get methods
            Method[] methods = cls.getDeclaredMethods();

            // Print method names
            for (Method method : methods) {

                System.out.println("Method: " + method.getName());
            }

            // Invoke method
            Method method = cls.getDeclaredMethod("display");

            method.invoke(obj);

        } catch (Exception e) {

            System.out.println(e);
        }
    }
}