import express, { response } from "express";
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

app.get("/", async (req,res) =>
{
    let city = "lahore";
    const options = {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
        params: {
          location: city,
          format: 'json',
          u: 'f'
        },
        headers: {
          'x-rapidapi-key': '0c23aec045mshdc6b573a2012c8dp1e4452jsn1c8e37accac0',
          'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          res.render("index.ejs", {
            data: response.data,
        });
      } catch (error) {
          console.error(error);
      }
    
})

app.post("/submit-form", async (req, res) =>
{
    let city = (req.body.city).toLowerCase();
    const options = {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
        params: {
          location: city,
          format: 'json',
          u: 'f'
        },
        headers: {
          'x-rapidapi-key': '0c23aec045mshdc6b573a2012c8dp1e4452jsn1c8e37accac0',
          'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          res.render("index.ejs", {
            data: response.data,
        });
      } catch (error) {
          console.error(error);
      }
   
})