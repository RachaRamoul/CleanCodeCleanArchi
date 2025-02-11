import React, { useState } from 'react';
import { TextField, Button, Grid, Card, Typography, Box } from '@mui/material';
import './AddDriverPage.css';
import BackButton from '../components/BackButton';
import SubHeader from '../components/SubHeader';
import { DriverService } from '../services/driverService';
import { toast, ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';

const AddDriverPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    licenseNumber: '',
    experienceYears: 0,
    companyId: '', 
  });

  const [error, setError] = useState<string | null>(null);

  const resetFormData = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      licenseNumber: '',
      experienceYears: 0,
      companyId: '',
    });
  };

  const validateForm = () => {
    if (formData.firstName.length < 2 || formData.lastName.length < 2) {
      return 'Le prénom et le nom doivent contenir au moins 2 caractères.';
    }
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      return 'Le numéro de téléphone doit contenir exactement 10 chiffres.';
    }
    if (formData.licenseNumber.length < 5) {
      return 'Le numéro de permis doit contenir au moins 5 caractères.';
    }
    if (formData.experienceYears <= 0) {
      return 'Les années d\'expérience doivent être supérieures à 0.';
    }
    if (!formData.companyId) {
      return 'Veuillez sélectionner ou renseigner l\'ID de la compagnie.';
    }
    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'experienceYears' ? parseInt(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);

    try {
      await DriverService.createDriver(
        formData.firstName,
        formData.lastName,
        formData.phoneNumber,
        formData.licenseNumber,
        formData.experienceYears,
        formData.companyId
      );

      toast.success('Le conducteur a été ajouté avec succès !');
      resetFormData();
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.error('Erreur lors de l\'ajout du conducteur :', error);
        toast.error('Erreur lors de l\'ajout du conducteur.');
        setError('Une erreur inattendue est survenue.');
      }
    }
  };

  return (
    <div className="add-driver-page">
      <SubHeader title="Ajouter un conducteur" />
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
        <div className="driver-card-wrapper">
          <Card className="driver-card">
            <BackButton navigateTo='/driver' />
            <Typography variant="h4" component="h1" align="center" fontWeight="bold" gutterBottom>
              Ajouter un conducteur
            </Typography>

            <form onSubmit={handleSubmit} className="driver-form">
              <TextField
                label="Prénom"
                variant="outlined"
                name="firstName"
                fullWidth
                required
                value={formData.firstName}
                onChange={handleChange}
                margin="normal"
              />

              <TextField
                label="Nom"
                variant="outlined"
                name="lastName"
                fullWidth
                required
                value={formData.lastName}
                onChange={handleChange}
                margin="normal"
              />

              <TextField
                label="Numéro de téléphone"
                variant="outlined"
                name="phoneNumber"
                fullWidth
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                margin="normal"
              />

              <TextField
                label="Numéro de permis"
                variant="outlined"
                name="licenseNumber"
                fullWidth
                required
                value={formData.licenseNumber}
                onChange={handleChange}
                margin="normal"
              />

              <TextField
                label="Années d'expérience"
                variant="outlined"
                name="experienceYears"
                type="number"
                fullWidth
                required
                value={formData.experienceYears}
                onChange={handleChange}
                margin="normal"
              />

              <TextField
                label="ID de la compagnie"
                variant="outlined"
                name="companyId"
                fullWidth
                required
                value={formData.companyId}
                onChange={handleChange}
                margin="normal"
              />

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
                  Ajouter le conducteur
                </Button>
              </Box>
            </form>
          </Card>
        </div>
      </Grid>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default AddDriverPage;
