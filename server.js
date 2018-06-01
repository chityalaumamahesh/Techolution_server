var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
var mongoose = require('mongoose');
var path = require('path');
var cors = require('cors');
var config = require('./config/db');

var myRoutes = require('./expressRoutes/userRoutes');
mongoose.Promise = global.Promise;
mongoose.connect(config.db).then(
    () => { console.log('Database Connected') },
    err = function() { console.log('can not connect to database' + err) }
);
app.use(cors());
var port = process.env.PORT || 3400;
app.set('port', port);
app.get('/', (req, res) => {
    res.send(" page not found");
})
app.use('/api', myRoutes);

app.listen(port, function() {
    console.log('server listening on ' + port);
});

module.exports = app;