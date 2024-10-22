const express = require('express')
const app = express();
const mongoose =require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

const auth = require('./routes/auth')
const user = require('./routes/userRoutes')
const product = require('./routes/productRoute')

const category = require('./routes/categoryRoutes')

app.use(express.json())
app.use(cors({
    origin: 'https://nabeelhash-ecommerce.vercel.app', // Replace with your client's origin
    credentials: true,
}));
app.use(cookieParser())
app.use('/',auth)
app.use('/',user)
app.use('/',product)
app.use('/',category)

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


mongoose.connect(process.env.MONGODB_URI).then(function(){
    console.log('connected to database')
    app.listen(process.env.PORT, () => {
        console.log('Server started');
    });

}).catch(function(error){
    console.log(error)
})