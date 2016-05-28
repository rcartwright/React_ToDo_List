var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
//app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/dist'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('/../index.html');
 console.log(app);
// return app;
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

/*var path = require('path')
var express = require('express')

module.exports = {
  app: function () {
    var app = express()
    var indexPath = path.join(__dirname, '/../index.html')
    var publicPath = express.static(path.join(__dirname, '../public'))

    app.use('/public', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}*/