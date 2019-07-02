import { Router } from 'express';
import User from './app/models/User'; // Temporary for test[волк]

const routes = new Router();

routes.get('/', async (req, res) => {
  // Temporary for test[волк]
  const user = await User.create({
    // Temporary for test[волк]
    name: 'Wolf Test',
    email: 'Wolf@test.com',
    password_hash: '1234567890',
  });
  return res.json(user); // Temporary for test[волк]
});

export default routes;
