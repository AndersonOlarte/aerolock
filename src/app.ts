import express from 'express';
import userRouter from './routes/user.route';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(userRouter);

export default app;
