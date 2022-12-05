import express from 'express';
import fsp from 'fs/promises';
const app = express();
const port = 3000;

app.get('/public',async(req, res) => {
  const Html_file= await fsp.readFile('./index.html','utf-8');
  res.status(200);
  res.setHeader('Content-Type','text/html')
  res.end(Html_file);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})