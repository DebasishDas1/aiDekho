import express from 'express';

import { getAITool, addNewTool } from '../controllers/aIToolCotrollers.js'

const aIToolRouter = express();

aIToolRouter.get('/', getAITool);
aIToolRouter.post('/add', addNewTool);

export default aIToolRouter;
