import express from 'express';

import { addfeedback } from '../controllers/feedbackController.js'

const feedbackRouter = express.Router();

feedbackRouter.post('/', addfeedback);

export default feedbackRouter;
