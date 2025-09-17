import express from 'express';
import morgan from 'morgan';
import blogRoutes from './routes/blogRoutes.js'

const PORT = 3000;
const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use("/api/blogs", blogRoutes);

app.use((err, req, res, next) => {
    console.log(err.stack);
    if(!err.status){
        err.status = 500;
    }
    err.message = `Internal Server Error`;
    res.status(err.status).json({message: err.message});
});

app.listen(PORT, ()=>{
    console.log(`Server is running in port ${PORT}`);
})