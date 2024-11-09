import { Router } from 'express';
import { signUpUser } from '../controllers/user.controller';

const router = Router();

// Route pour l'inscription de l'utilisateur
router.post('/signup', signUpUser);  // Cette ligne est correcte

export default router;
