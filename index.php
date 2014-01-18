<?php
# This function reads your DATABASE_URL configuration automatically set by Heroku
# the return value is a string that will work with pg_connect
function pg_connection_string() {
  return "dbname=d3ikol6qg14259 host=ec2-54-197-241-96.compute-1.amazonaws.com port=5432 user=ehixiwhxiwbuiz password=pPrYySOoxbIHzl_0ExDFeSEUGR sslmode=require"// we will fill this out next
}
 
# Establish db connection
$db = pg_connect(pg_connection_string());
if (!$db) {
   echo "Database connection error."
   exit;
}
 
$result = pg_query($db, "SELECT statement goes here");
?>