const mysql = require('mysql');


// connect with data base

const connection = mysql.createConnection({
  host        : 'localhost',
  user        : 'root',
  password    : '',
  database    : 'network_db'
});
connection.connect( err => {
  if (err) throw err.stack;
  console.log('Connected to DB => ' + connection.threadId);
});




module.exports = connection;
