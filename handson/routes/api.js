import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
  let message = req.query.message;

  console.log(message)

  if (message === '') {
    res.status(400);
    message = 'messageの値が空です';
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