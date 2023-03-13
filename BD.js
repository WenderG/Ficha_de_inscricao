var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : '@Play3dogamer',
  password : 'secret',
  database: 'bd'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM usuarios', function(err, rows, fields){
  if(!err) {
    console.log('Resultado: ', rows);
  }else {
    console.log('Erro ao realizar a consulta!');
  }
})