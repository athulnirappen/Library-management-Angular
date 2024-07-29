const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDb = require('./db/connction')
const bookRouter = require('./routes/bookRoute')
const memberRouter=require('./routes/memberRoute')
dotenv.config()
connectDb()





const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/books', bookRouter)
app.use('/api/member',memberRouter)



const PORT=8000 | process.env.PORT

app.listen(PORT,() => {
    console.log(`server is running in the port:${PORT} `);
})