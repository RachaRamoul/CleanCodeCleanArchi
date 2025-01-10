import { Router } from 'express';
import { addUser, listUsers } from '../controllers/user.controller';

const router = Router();

router.post('/', addUser);

router.get('/', listUsers);

export default router;
