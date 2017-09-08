var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "root",
		password: "password",
		database: "burgers_db"
	})
};

connection.connect(function(err) {
	if (err) {
		console.error("ERROR: mysql connection error = " + err.stack + "\n");
		return;
	}
	console.log("Connected to mysql db as ID: " + connection.threadId + "\n");
});

module.exports = connection;