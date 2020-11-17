const express  = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const {json,urlencoded} = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/routes');

app.use(cors());
app.use(json())
app.use(urlencoded({extended: true}))
app.use(morgan("dev"))

const PORT  = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    return res.status(200).json({
        status: 'okay',
        code: 200,
        message: 'welcome to users api'
    })
})

app.use('/api/', authRoutes);
app.use('/api/', userRoutes);

app.all('*', (req, res)=>{
    return res.status(404).json({
        status: "error",
        message: "not found",
        code : 404
    })
})

if(app.get('env') === 'development'){
    app.use(function(err, req, res, next){
        return res.status(err.status || 500).json({
            message: err.message,
             error: err
        });
    })
}

app.listen(PORT, ()=>{
    console.log(`app is listening on localhost:${PORT}`);
})