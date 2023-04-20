import express from 'express';

const userRouter = express();

userRouter.get('/', (req, res) => {
    res.send('feedbackRouter')
});

export default userRouter;
