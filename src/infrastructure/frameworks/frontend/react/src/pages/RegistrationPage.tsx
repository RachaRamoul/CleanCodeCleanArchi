import React, { useState } from 'react';
import { TextField, Button, Grid2, Card, Typography, Box, FormControlLabel, Checkbox } from '@mui/material';
import './RegistrationPage.css';
import BackButton from '../components/BackButton';
import SubHeader from '../components/SubHeader';
import { CompanyService } from '../services/companyService';
import { toast, ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';


const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    siretNumber: '',
    isAdmin: false,
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState<string | null>(null);

  const passwordValidator = () => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(formData.password);
    const hasLowercase = /[a-z]/.test(formData.password);
    const hasNumber = /\d/.test(formData.password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);

    return (
        formData.password.length >= minLength &&
        hasUppercase &&
        hasLowercase &&
        hasNumber &&
        hasSpecialChar
    );
  }

  const resetFormData = () => {
    setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        siretNumber: '',
        isAdmin: false,
        password: '',
        confirmPassword: '',
      });
  }

  const validateForm = () => {
    const isNameValid= formData.name.length > 2 && formData.name.length < 30;
    // eslint-disable-next-line no-useless-escape
    const isEmailValid =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email);
    const isNumberValid = formData.phoneNumber.length === 10;
    const isSiretNumberValid = formData.siretNumber.length === 14;
    const isPasswordValid = passwordValidator();

    if(!isNameValid) {  
        return 'Le nom doit être compris entre 2 et 30 caractères.';
    }else if(!isEmailValid) {
        return 'Le mail ne respecte pas le format attendu.';
    }else if(!isNumberValid) {
        return 'Le numéro de téléphone doit contenir 10 chiffres.';
    }else if(!isSiretNumberValid) {
        return 'Le numéro de siret ne respecte pas le format attendu.';
    }else if(!isPasswordValid) {
        return 'Le mot de passe ne respecte pas le format attendu.';
    }else if(formData.password !== formData.confirmPassword) {
        return 'Les mots de passe ne correspondent pas.';
    }

    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if(validationError) {
        setError(validationError);
      return;
    }
    setError(null);

    try {
      await CompanyService
      .createCompany(
        formData.name,
        formData.email, 
        formData.phoneNumber, 
        formData.siretNumber,
        formData.isAdmin,
        formData.password);
    
      toast.success('Le compte créé avec succès !');
      resetFormData();
      
    }catch(error: unknown){
        
        if(error instanceof AxiosError){
            if (error.response && error.response.data && error.response.data.message) {
                const errorMessage = error.response.data.message;
                if(errorMessage === 'A company with this email already exists.'){
                    setError('Une compagnie avec cette adresse mail existe déjà.'); 
                    toast.error('Adresse mail déjà existante dans la base.');
                }
              } else {
                console.error('An unexpected error has occurred.', error);
                setError('Une erreur inattendue est survenue.');
                toast.error('Erreur lors de la création du compte.');
              }
        }
    }
  };

  return (
    <div className="registration-page">
    <SubHeader title="Inscription concessionnaire" />
    <Grid2 container justifyContent="center" alignItems="center" style={{minHeight: '80vh' }}>
      <div className="registration-card-wrapper">
          <Card className="registration-card">
              <BackButton navigateTo='/company'/>
              <Typography variant="h4" component="h1" align="center" fontWeight="bold" gutterBottom>
                  Créer un compte
              </Typography>

              <form onSubmit={handleSubmit} className="registration-form">
                    <TextField
                      label="Nom"
                      variant="outlined"
                      name="name"
                      fullWidth
                      required
                      value={formData.name}
                      onChange={handleChange}
                      margin="normal" />

                    <TextField
                      label="Email"
                      variant="outlined"
                      name="email"
                      fullWidth
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      margin="normal" />

                    <TextField
                      label="Numéro de téléphone"
                      variant="outlined"
                      name="phoneNumber"
                      fullWidth
                      required
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      margin="normal" /> 

                    <TextField
                      label="Numéro de Siret"
                      variant="outlined"
                      name="siretNumber"
                      fullWidth
                      required
                      type="text"
                      value={formData.siretNumber}
                      onChange={handleChange}
                      margin="normal" /> 

                    <TextField
                      label="Mot de passe"
                      variant="outlined"
                      name="password"
                      fullWidth
                      required
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      margin="normal" />

                    <TextField
                      label="Confirmer le mot de passe"
                      variant="outlined"
                      name="confirmPassword"
                      fullWidth
                      required
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      margin="normal" />

                    <FormControlLabel
                      control={
                        <Checkbox
                          name="isAdmin"
                          checked={formData.isAdmin}
                          onChange={handleChange}
                          color="secondary"
                        />
                      }
                      label="Compte administrateur" /> 

                  {error && (
                      <Typography color="error" align="center" sx={{ mt: 1 }}>
                          {error}
                      </Typography>
                  )}

                  <Box mt={4}>
                      <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          fullWidth
                          sx={{ padding: '10px', fontWeight: 'bold' }}
                      >
                          S'inscrire
                      </Button>
                  </Box>
              </form>
          </Card>
        </div>
      </Grid2>
      <ToastContainer position="bottom-right"  />
      </div>
  );
};

export default RegistrationPage;
