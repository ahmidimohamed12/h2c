const mysql = require();
const connection = mysql.createConnection({
    host : 'localhost',
    user : '',
    password : ' ',
    database : ''
});
connection.connect((err)=>{
    if (err) throw err;
    console.log("Errore");
});