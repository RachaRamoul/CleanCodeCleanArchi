import mongoose, { Schema, Document, CallbackError } from 'mongoose';
import bcrypt from 'bcrypt';

// Interface représentant l'entité 'User' dans MongoDB
export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  companyId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  siretNumber: string;
  type: string; // Livreur, Location, etc.
  password: string; // Mot de passe haché
}

// Schéma Mongoose pour l'entité 'User'
const UserSchema: Schema<IUser> = new Schema<IUser>({
  companyId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  siretNumber: { type: String, required: true },
  type: { type: String, required: true }, // Exemple: Livreur, Location
  password: { type: String, required: true }, // Champ mot de passe ajouté
});

// Pré-hook Mongoose pour hacher le mot de passe avant de sauvegarder
UserSchema.pre<IUser>('save', async function (next) {
  const user = this; // 'this' fait référence à l'instance de l'utilisateur

  // Si le mot de passe n'est pas modifié, on passe à l'étape suivante
  if (!user.isModified('password')) {
    return next(); // Si le mot de passe n'est pas modifié, on ne fait rien
  }

  try {
    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword; // Remplacer le mot de passe en clair avec le mot de passe haché
    next(); // On appelle next pour poursuivre la sauvegarde
  } catch (error: unknown) {
    // TypeScript nous avertit que `error` est de type `unknown`
    // On doit le typifier explicitement en `CallbackError` pour que `next` l'accepte.
    next(error as CallbackError); // On cast l'erreur en `CallbackError`
  }
});

// Création du modèle Mongoose à partir du schéma
export const UserModel = mongoose.model<IUser>('User', UserSchema);
