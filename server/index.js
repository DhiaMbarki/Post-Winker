import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'


const app = express()
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://javascriptmastery:javascriptmastery123@crud.c1rxu.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT = process.env.Port || 5000;

mongoose.connect(CONNECTION_URL, { userNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT} `)))
    .catch((error) => console.log(error.message));                                        //make sure there is no errors in the console

mongoose.set('useFindANDModify', false);