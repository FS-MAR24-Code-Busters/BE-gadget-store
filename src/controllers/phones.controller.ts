import { Request, Response } from 'express';
import { Phone } from '../models/phone.model';

export const getAllPhones = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const phones = await Phone.findAll();
  res.json(phones);
};

export const getPhone = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const phone = await Phone.findByPk(id);

  res.json(phone);
};
