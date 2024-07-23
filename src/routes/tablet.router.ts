import express from 'express';
import { getAllTablets, getTablet } from '../controllers/tablets.controler';

export const tabletsRouter = express.Router();

tabletsRouter.get('/', getAllTablets);

tabletsRouter.get('/:id', getTablet);