import express from 'express';
import { authenticateCompany, validateToken } from '../controllers/auth.controller';

const router = express.Router();

router.post('/', authenticateCompany);
router.post('/validateToken', validateToken);

export default router;