using MySqlConnector;
using System;
using System.Data;
using DKADatabase;
using DKAAuth;


namespace DKABase
{
    public class DKA
    {
        public abstract class Auth : DKAAuth.Auth
        {

        }

        public abstract class Database : DKADatabase.Database
        {

        }


    }

}
