import express from 'express';
import cors from 'cors';
import './config.js'
import Product from "./routes/productRoute.js";
const app = express();

//middelwares
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true,
    defaultErrorHandler: false,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// api's routes 

app.use('/api/v1', Product)


app.use('*', (req, res) => {
    return res.json({
        message: 'Backend is runing..'
    })
});

//Port
const port =  3333;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});