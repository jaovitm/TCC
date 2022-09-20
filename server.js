const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 80;

const connection = mysql.createConnection({
  host: "102A",
  user: "arley",
  password: "arley",
  database: "eventos",
});

app.get("/", (req, res) => {
    connection.query(
      "SELECT * FROM eventos",
      function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;

        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results);
      }
    );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
