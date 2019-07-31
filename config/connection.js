var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        port: 3306,
        host: 'ryvdxs57afyjk41z.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'roiti91b0j6yurf340ot',
        password: 'tl041io282ndjgbb',
        data: 'oix6201hjrtgd7wf'
    })
};

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });
  
  module.exports = connection;