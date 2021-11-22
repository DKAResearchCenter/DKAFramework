using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Text;


namespace DKADatabase
{
    public class Database
    {
        /** Fungsi Untuk Melakukan Database Di Dalam Aplikasi
        * dibuat Oleh Yovangga Anandhika
        * Devision DKA Research Center
        * **/
        public class MySQL
        {
            public MySqlConnection Connect(string host = "localhost", string username = "root", string password = "", string port = "3306", string dbname = "test")
            {
                var connection = new MySqlConnection("Server=" + host + ";User ID=" + username + ";Password=" + password + ";Database=" + dbname + " ");
                connection.Open();

                using (var command = new MySqlCommand("SELECT field FROM table;", connection))
                using (var reader = command.ExecuteReader())
                    while (reader.Read())
                        Console.WriteLine(reader.GetString(0));
                return connection;
            }
            public MySqlConnection Connect(string host = "localhost", string username = "root", string password = "", string dbname = "test")
            {
                var connection = new MySqlConnection("Server=" + host + ";User ID=" + username + ";Password=" + password + ";Database=" + dbname + " ");
                connection.Open();

                using (var command = new MySqlCommand("SELECT field FROM table;", connection))
                using (var reader = command.ExecuteReader())
                    while (reader.Read())
                        Console.WriteLine(reader.GetString(0));
                return connection;
            }
             

        }

        public static string Test()
        {
            return "as";
        }

        public int MariaDB(string host, string username, string password, string port, string database)
        {

            return 0;
        }

        public int MsDB(string host, string username, string password, string port, string database)
        {

            return 0;
        }

        public int OracleDB(string host, string username, string password, string port, string database)
        {

            return 0;
        }


    }
}
