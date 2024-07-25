import { Request, Response } from 'express';
import { Tablet } from '../models/tablets.model';

export const getAllTablets = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const tablets = await Tablet.findAll();
  res.json(tablets);
};

export const getTablet = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const tablet = await Tablet.findByPk(id);

  res.json(tablet);
};