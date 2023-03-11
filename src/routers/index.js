import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('Пошел нахуй!');
});

export default router;