import express, { Request, Response } from 'express';
import { json } from 'body-parser';
const app = express();
app.use(json());

app.get('/api/users/currentuser', (req: Request, res: Response) => {
  const dummyRequest = req.body;
  console.log(dummyRequest);
  res.send('test user');
});
app.listen(3000, () => {
  console.log('check listning on port 3000!');
});
