import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const PORT = 5000;
const SECRET_KEY = 'your-secret-key';

// Mock user data
const users = [{ id: 1, username: 'user', password: '$2a$10$Xf8NkJfRv0cFGB4eU2xfCuGrcFJ7jZzyFzP7nKmXNCiZy1SijHx46' }]; // password: password123

// Middleware to authenticate JWT
const authenticateToken = (req: Request, res: Response, next: Function) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.body.user = user;
    next();
  });
};

// Login route
app.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (user && bcrypt.compareSync(password, user.password)) {
    const accessToken = jwt.sign({ username: user.username, id: user.id }, SECRET_KEY);
    res.json({ accessToken });
  } else {
    res.sendStatus(401);
  }
});

// Protected route
app.get('/protected', authenticateToken, (req: Request, res: Response) => {
  res.json({ message: 'This is protected data' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
