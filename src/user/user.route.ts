import { Router } from 'express';

const userRouter = Router();

// Initial users updated to include `subjects` array
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', universityId: 1, subjects: [] },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', universityId: 2, subjects: [] }
];

// PATCH to update subjects
userRouter.patch('/update-subjects/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (user) {
    user.subjects = req.body.subjects; // Replace or update the subjects array
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

userRouter.get('/', (req, res) => {
  res.json(users);
});

userRouter.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

userRouter.post('/', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    universityId: req.body.universityId || null, // Add universityId, default to null if not provided
    subjects: req.body.subjects || [] // Add subjects, default to empty array if not provided
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT to update an existing user
userRouter.put('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    users[userIndex] = {
      id: userId,
      name: req.body.name,
      email: req.body.email,
      universityId: req.body.universityId || users[userIndex].universityId, // Retain existing universityId if not provided
      subjects: req.body.subjects || users[userIndex].subjects // Retain existing subjects if not provided
    };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// DELETE a user by ID
userRouter.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser[0]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

userRouter.patch('/update-university/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (user) {
    user.universityId = req.body.universityId;
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

export default userRouter;
