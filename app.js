
var express = require('express');
var app = express();
const port= 8999;
var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var authRouter = require('./routes/auth');
//var compagnieRouter = require('./routes/api/compagnies');
var logoutRouter = require('./routes/logout');
var refreshToken = require ('./routes/refresh');


const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//var usersRouter = require('./routes/users');
//var assuranceRouter = require('./routes/assurance');

var expressLayouts = require('express-ejs-layouts');


// EJS 
app.use(expressLayouts);
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.listen(
    port,
    ()=>console.log('its alive on http://localhost:'+port)
);



app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/auth', authRouter);
app.use('/refresh',refreshToken);
app.use('/lgout', logoutRouter);
//app.use('/compagnies', compagnieRouter);






app.use(express.static("public"));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });


module.exports = app;
