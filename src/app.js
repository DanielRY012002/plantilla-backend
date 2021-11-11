import express from 'express';
import morgan from 'morgan';
import userRoutes from './routers/user.routes';
import authRoutes from './routers/auth.routes';
const app=express();
var cors=require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.get('/',function(req,res,next){
    res.send('Bienvenido a CatDo ....');
});
app.use('/api/auth',authRoutes);
app.use('/api/auth/user',userRoutes);
export default app;