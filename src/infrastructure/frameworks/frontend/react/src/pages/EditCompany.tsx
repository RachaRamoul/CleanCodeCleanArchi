import React, { useEffect, useState } from 'react';
import { TextField, Button, Grid2, Card, Typography, Box, FormControlLabel, Checkbox } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import './RegistrationPage.css';
import BackButton from '../components/BackButton';
import SubHeader from '../components/SubHeader';
import { CompanyService } from '../services/companyService';
import { toast, ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';
import Loading from '../components/Loading';
import { Company } from '../../../../../../domain/entities/company.entity';
import { PartialCompany } from '../types/company';

const CompanyEditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState<PartialCompany>({
    name: '',
    email: '',
    number: '',
    siretNumber: '',
    isAdmin: false,
  });

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const company: Company | null = await CompanyService.getCompagnyById(id!); 
        if(!company) {
            setError('La compagnie n\'a pas pu être trouvé.');
            return 
        } 
        setFormData({
          name: company.name.toString(),
          email: company.email.toString(),
          number: company.number,
          siretNumber: company.siretNumber.toString(),
          isAdmin: company.isAdmin,
        });
        toast.success('La compagnie a été trouvée !');
      } catch (error) {
        console.error('Error fetching company details:', error);
        setError('Erreur lors du chargement des informations de la compagnie.');
        toast.error('Une erreur est survenue lors de la récupération de la compagnie.');
      }finally{
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await CompanyService.editCompany(id!, {
        name: formData.name,
        email: formData.email,
        number: formData.number,
        siretNumber: formData.siretNumber,
        isAdmin: formData.isAdmin,
      });
      toast.success('Les modifications ont été enregistrées avec succès.');
      navigate('/company');
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.error('An error occurred:', error);
        toast.error('Erreur lors de la mise à jour des informations.');
      }
    }
  };

  if (loading) {
    return (
        <Loading/>
    );
  }

  return (
    <div className="registration-page">
      <SubHeader title="Modifier les informations de la compagnie" />
      <Grid2 container justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
        <Card className="registration-card">
          <BackButton navigateTo="/company" />
          <Typography variant="h4" component="h1" align="center" fontWeight="bold" gutterBottom>
            Modifier la compagnie
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
              margin="normal"
            />

            <TextField
              label="Email"
              variant="outlined"
              name="email"
              fullWidth
              required
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
            />

            <TextField
              label="Numéro de téléphone"
              variant="outlined"
              name="number"
              fullWidth
              required
              type="tel"
              value={formData.number}
              onChange={handleChange}
              margin="normal"
            />

            <TextField
              label="Numéro de Siret"
              variant="outlined"
              name="siretNumber"
              fullWidth
              required
              value={formData.siretNumber}
              onChange={handleChange}
              margin="normal"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="isAdmin"
                  checked={formData.isAdmin}
                  onChange={handleChange}
                  color="secondary"
                />
              }
              label="Compte administrateur"
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
                Enregistrer les modifications
              </Button>
            </Box>
          </form>
        </Card>
      </Grid2>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default CompanyEditPage;
