import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class StudentDAO {

    String url = "jdbc:mysql://localhost:3306/studentdb";
    String username = "root";
    String password = "password";

    void insertStudent(int id, String name, int age) {

        try {

            Connection con = DriverManager.getConnection(url, username, password);

            String query = "INSERT INTO students VALUES (?, ?, ?)";

            PreparedStatement ps = con.prepareStatement(query);

            ps.setInt(1, id);
            ps.setString(2, name);
            ps.setInt(3, age);

            ps.executeUpdate();

            System.out.println("Student inserted successfully.");

            con.close();

        } catch (Exception e) {

            System.out.println(e);
        }
    }

    void updateStudent(int id, String newName) {

        try {

            Connection con = DriverManager.getConnection(url, username, password);

            String query = "UPDATE students SET name = ? WHERE id = ?";

            PreparedStatement ps = con.prepareStatement(query);

            ps.setString(1, newName);
            ps.setInt(2, id);

            ps.executeUpdate();

            System.out.println("Student updated successfully.");

            con.close();

        } catch (Exception e) {

            System.out.println(e);
        }
    }

    public static void main(String[] args) {

        StudentDAO dao = new StudentDAO();

        dao.insertStudent(1, "Ravi", 20);

        dao.updateStudent(1, "Ravi Kumar");
    }
}