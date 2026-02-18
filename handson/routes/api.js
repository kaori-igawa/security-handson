import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
  res.setHeader('X-Timestamp', Date.now());

  let message = req.query.message;

  const lang = req.headers['x-lang'];

  console.log(message)

  if (message === '') {
    res.status(400);
    if (lang === 'en') {
      message = 'message is empty';
    } else {
      message = 'messageの値が空です';
    }
  }
  res.send({message});
});

router.use(express.json());

router.post('/', (req, res) =>{
  const body = req.body;
  console.log(body);
  res.end();
})

export default router;