import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import indexRouter from './routes/index';
import getBoardRouter from './routes/getBoard';
import createBoardRouter from './routes/createBoard';
import deleteBoardRouter from './routes/deleteBoard';
import updateBoardRouter from './routes/updateBoard';

const app = express();

app.use(cors());
app.use(helmet());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Routes
app.use('/', indexRouter);
app.use('/getBoard', getBoardRouter);
app.use('/createBoard', createBoardRouter);
app.use('/deleteBoard', deleteBoardRouter);
app.use('/updateBoard', updateBoardRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
