import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.listen(port, ()=>
{
    console.log("Listening on port " + port);
})

app.get("/", (req,res) =>
{
    res.render(__dirname + "/views/index.ejs");
})

app.post("/submit-form", (req, res) =>
{
    console.log((req.body.city).toLowerCase());
    
})