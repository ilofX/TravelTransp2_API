let createError = require('http-errors');
let express = require('express');
let path = require('path');
let logger = require('morgan');
let helmet = require('helmet');
let spdy = require('spdy');
const sequelize = require("./Sequelize");

let resourcesRouter = require('../routes/resources');
let authenticationRouter = require('../routes/authentication');
let adminRouter = require('../routes/admin');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

app.use('/api/auth/', authenticationRouter);
app.use('/api/res/', resourcesRouter);
app.use('/api/admin/', adminRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
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
