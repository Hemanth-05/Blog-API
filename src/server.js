import express from 'express';
import blogRoutes from './routes/blogRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'

const PORT = process.env.PORT || 3000;
const app = express();

if(process.env.NODE_ENV === "development"){
    const morganModule = await import('morgan');
    const morgan = morganModule.default;
    app.use(morgan('tiny'));
}
app.use(express.json());
app.use("/api/blogs", blogRoutes);
app.use("/api/categories", categoryRoutes);

app.use((req, res, next) => {
    const err = new Error(`Not Found`);
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    console.log(err.stack);
    if(!err.status){
        err.status = 500;
        err.message = `Internal Server Error`;
    }
    res.status(err.status).json({message: err.message});
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}