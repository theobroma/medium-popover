import path from 'path';
import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import mongoose from 'mongoose';
import morgan from 'morgan';
// server routes
import config from '../etc/config.json';

import medium from './routes/medium';

const app = express();

app.set('port', (process.env.PORT || 8080));
mongoose.Promise = global.Promise;
const mongoUri = process.env.MONGOLAB_URI || `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

/* mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);*/

mongoose.connect(mongoUri, (error) => {
  if (error) console.error(error);
  else console.log('mongo connected');
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(favicon(path.join(__dirname, 'public','build','favicon.png')));
app.use(express.static(path.join(__dirname, 'public', 'build')));

// All routes in the end
app.use('/api/medium', medium);

// Redirect all non api requests to the index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'build','index.html'));
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
