const mysql = require('mysql');


// connect with data base

const connection = mysql.createConnection({
  host        : 'ec2-50-19-95-47.compute-1.amazonaws.com',
  user        : 'jhmzwqdqylvaom',
  password    : '42139e9b0130bda9498548fe4adca06ec0b4a5cbd2624f14031b77fcb7fb6860',
  port        : '5432',
  database    : 'deu64qpvqafpo1'
});


connection.connect( err => {
  if (err) throw err.stack;
  console.log('Connected to DB => ' + connection.threadId);
});




module.exports = connection;
