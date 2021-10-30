import express from 'express';
const app=express()

// use the express-static middleware
app.use(express.static("public"))

app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
  });

 
  app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
  });
   
  app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
  });
   
  app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
  });
   
  app.listen(process.env.PORT || 3000, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );