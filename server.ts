const path = require('path')
import express, { Request, Response } from 'express';

const app = express()
const PORT = 5001

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');

app.get("/", (req: Request, res: Response) => { 
  res.render("pages/index");
})

app.listen(PORT, () => {
  console.log(" app running on port:", PORT)
})