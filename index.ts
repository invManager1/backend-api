import express from 'express';
import dotenv from 'dotenv'
const prisma = require("./db/prisma")

const app = express();
const port = 5000;

dotenv.config()


app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello, world!');
});

app.listen(port, () => console.log(`App listening on port ${port}`));