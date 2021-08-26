import express, { json, urlencoded } from "express";
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import indexRouter from './routes/index.routes'

import db from './config/database/database';
import { createRoles } from './libs/initialSetup';

const app = express();
const server = http.Server(app);

createRoles();

//MIDDLEWARE
app.use(cors());
app.use(json());
app.use(urlencoded({ 
    extended: true
}));
app.use(morgan('dev'));


app.use('/api', indexRouter);

export default server;