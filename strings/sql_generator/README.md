# SQL generator

String[] columns = { "a", "b" };
assertEquals("select a,b,c from x", sql.select(tableName, columns));

Do this for the usual SQL queries: SELECT, INSERT, UPDATE, DELETE. Remember to only do one thing at a time, and try not to think of the solution "ahead of time". Let the methods and objects just grow by themselves, as you write more and more tests.