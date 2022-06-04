const express = require("express");

const ejs = require("ejs");

const app = express();

// app.use(bodyParser.urlencoded({
// 	extended: true
// }));
app.use(express.static('public'));
app.set("view engine", 'ejs')

const port = process.env.PORT || 3000

app.get('/', function(req, res) {
	res.render(`home.ejs`)
});
app.get('/resume', function(req, res) {
	res.render(`resume.ejs`)
});


app.listen(port, function() {
	console.log(`server running on port: ${port}`);
});
