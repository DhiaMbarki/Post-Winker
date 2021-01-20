import express from 'express';

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Dude this work!')

})

export default router;