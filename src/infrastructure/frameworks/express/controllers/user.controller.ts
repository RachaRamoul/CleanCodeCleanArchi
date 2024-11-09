import { Request, Response, NextFunction } from 'express';
import { AddUserUseCase } from '../../../../application/usecases/add-user.usecase';
import { MongoUserRepository } from '../../../repositories/mongodb/user.repository';

const userRepository = new MongoUserRepository();
const addUserUseCase = new AddUserUseCase(userRepository);

export const signUpUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  // Ajoute `password` à la destructuration
  const { firstName, lastName, email, phoneNumber, siretNumber, companyName, password } = req.body;

  // Vérification de la validité des données
  if (!firstName || !lastName || !email || !phoneNumber || !siretNumber || !companyName || !password) {
    res.status(400).json({ message: 'Tous les champs, y compris le mot de passe, doivent être remplis.' });
    return; // Important pour empêcher une exécution supplémentaire
  }

  try {
    // Appelle le cas d'utilisation pour créer un nouvel utilisateur
    const newUser = await addUserUseCase.execute(
      firstName,
      lastName,
      email,
      phoneNumber,
      siretNumber,
      companyName, 
      password
    );
    res.status(201).json(newUser);
  } catch (error) {
    next(error); // Propagation correcte des erreurs via `next()`
  }
};
