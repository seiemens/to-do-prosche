import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import * as middlewares from './middlewares';
import api from './api';
import MessageResponse from './interfaces/MessageResponse';

require('dotenv').config();

const app = express();

//all the dependencies get importet(with use function)
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());



//the base Api URL
app.use('/', api);



//Error handling of the MIddleware
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
