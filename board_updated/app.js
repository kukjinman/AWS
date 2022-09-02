var express = require('express');
var app = express();
var db_config = require(__dirname + '/config/database.js');
var conn = db_config.init();
var bodyParser = require('body-parser');

db_config.connect(conn);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', function (req, res) {
    res.send('ROOT');
});

app.get('/list', function (req, res) {
    var sql = 'SELECT * FROM db_test.board';    
    conn.query(sql, function (err, rows, fields) {
        if(err) console.log('query is not excuted. select fail...\n' + err);
        else res.render('list.ejs', {list : rows});
    });
});

app.get('/write', function (req, res) {
    res.render('write.ejs');
});



app.post('/writeAf', function (req, res) {
    var body = req.body;
    console.log(body);

    console.log(`${body.name} , ${body.phoneNumber} , ${body.email}`)
    var sql = 'INSERT INTO db_test.board VALUES(?, ?, ?, ?)';
    var params = [ body.id, body.name, body.phoneNumber, body.email];
    console.log(sql);
    conn.query(sql, params, function(err) {
        if(err) console.log('query is not excuted. insert fail...\n' + err);
        else res.redirect('/list');
    });
});

app.get('/delete/:id', function (req, res) {

    var body = req.body;
    var sql = "DELETE FROM db_test.board WHERE id = ?";
    var params = [ req.params.id ];
    console.log(sql);
    conn.query(sql, params, function(err) {
        if(err) console.log('query is not excuted. insert fail...\n' + err);
        else res.redirect('/list');
    });

});


app.get('/edit/:id', function (req, res) {

    res.render('edit.ejs',{unique_id : req.params.id });

});

app.post('/editAf/:id', function (req, res) {
    var body = req.body;
    var sql = "UPDATE db_test.board SET name = ? phoneNumber = ? email = ? WHERE id = ?";
    console.log(body);
    var params = [body.name, body.phoneNumber ,body.email, parseInt(req.params.id)];
    console.log(sql);
    conn.query(sql, params, function(err) {
        if(err) console.log('query is not excuted. insert fail...\n' + err);
        else res.redirect('/list');
    });
});


app.listen(8080, () => console.log('Server is running on port 8080...'));
