import express from 'express';
import fsp from 'fs/promises';
const app = express();
const port = 3000;

app.get('/',async(req, res) => {
  const Html_file= await fsp.readFile('./public/index.html','utf-8');
  res.status(200);
  res.setHeader('Content-Type','text/html',)
  res.end(Html_file);
})
app.get('/index.css',async(req, res) => {
  const Html_file= await fsp.readFile('./public/index.css','utf-8');
  res.status(200);
  res.setHeader('Content-Type','text/css',)
  res.end(Html_file);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})