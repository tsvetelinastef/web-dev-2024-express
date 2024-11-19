import { Router } from 'express';

const universityRouter = Router();

let universities = [
  { id: 1, name: 'Harvard University' },
  { id: 2, name: 'Stanford University' },
  { id: 3, name: 'TU-Sofia' }
];

// GET all universities
universityRouter.get('/', (req, res) => {
  res.json(universities);
});

// POST a new university
universityRouter.post('/', (req, res) => {
  const newUniversity = {
    id: universities.length + 1,
    name: req.body.name
  };
  universities.push(newUniversity);
  res.status(201).json(newUniversity);
});

// DELETE a university by ID
universityRouter.delete('/:id', (req, res) => {
  const universityId = parseInt(req.params.id);
  const index = universities.findIndex((u) => u.id === universityId);
  if (index !== -1) {
    const deletedUniversity = universities.splice(index, 1);
    res.json(deletedUniversity[0]);
  } else {
    res.status(404).json({ message: 'University not found' });
  }
});

export default universityRouter;
