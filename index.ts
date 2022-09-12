import express from "express";
import bodyParser from "body-parser";
import { checkLogin } from "./src/middleware/checkLogin";
import multer from 'multer';
const upload = multer();

const PORT = 8000;
const app = express();

app.set("view engine", "ejs");
app.set("views", './src/views');
app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/', upload.none(),checkLogin, (req, res) => {
    res.end('<h1>Sucess</h1>');
})

app.listen(PORT, () => {
    console.log("App running on port: " + PORT)
})