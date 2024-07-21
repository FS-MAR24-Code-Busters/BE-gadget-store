import express from 'express';
import { getAllPhones, getPhone } from '../controllers/phones.controller';

export const phonesRouter = express.Router();

phonesRouter.get('/', getAllPhones);

phonesRouter.get('/:id', getPhone);
