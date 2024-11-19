import express, { Request, Response } from 'express';
import { db } from '../database';

const router = express.Router();

//subjects model and route
// post user method
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, town } = req.body;
    if (await db.models.University.findOne({ where: { name } })) {
      throw new Error("University already exists.")
    }
    const university = await db.models.University.create({ name, town });
    res.status(201).json(university);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// subjects to users (many users - many subjects)
router.get('/', async (_req: Request, res: Response) => {
  try {
    const universities = await db.models.University.findAll({
      include: {
        model: db.models.User,
        as: 'users',
      },
    });
    res.status(200).json(universities);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});


export default router;