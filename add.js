var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '107.21.53.171',
  user     : 'LinAppServer',
  password : '4lb7VxnK5@Kj',
});
connection.connect();
 
/*connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});*/
 
connection.end();

  
