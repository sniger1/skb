import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  const absum = (+ req.query.a || 0) + (+req.query.b || 0);
  res.send(absum.toString());
});




app.listen(8090, () => {
  console.log('Your app listening on port 3000!');
});
