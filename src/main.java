import java.sql.*;


public class main {
    public static void main(String args[]) throws SQLException {
        Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/classicmodels?autoReconnect=true&useSSL=false", "root", "localhost");
        Statement stmt = conn.createStatement();

        {
            ResultSet rs = stmt.executeQuery("SELECT * FROM mealtable.Monday;");
            while (rs.next()) {
                System.out.println(rs.getString("Menu"));
            }
        }
    }
}