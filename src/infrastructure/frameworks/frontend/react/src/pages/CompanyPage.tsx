import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Alert, IconButton } from '@mui/material';
import './CompanyPage.css';
import { CompanyService } from '../services/companyService';
import { Company } from '../../../../../../domain/entities/company.entity';
import SubHeader from '../components/SubHeader';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import Button from '../components/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const CompanyDetailsPage: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    fetchCompanyData();
  }, []);

  const fetchCompanyData = async () => {
    try {
      const data = await CompanyService.listCompanies(); 
        setCompanies(data);
    } catch (error) {
      console.error('Error fetching motorcycles:', error);
      setError("Erreur lors de la récupération des données de la compagnie.");
    }finally{
        setLoading(false);
    }
  };

  const handleDelete = async (companyId: string) => {
    try {
        await CompanyService.deleteCompany(companyId);
        toast.success('La compagnie a été supprimé avec succès !');
        fetchCompanyData();
    }catch(error) {
        console.error('An unexpected error has occurred :', error);
        toast.error('Une erreur est survenue lors de la suppression.');
    }
    
  }

  if (loading) {
    return (
        <Loading/>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <div className="company-page">
        <SubHeader title="Liste des compagnies" />
        <TableContainer  className="table-container">
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ marginBottom: '20px', padding: '0 20px' }}
        >
            <BackButton navigateTo='/dashboard' />
            <Button text='Créer un compte' navigateTo='/company/register' />
        </Box>
            <Table>
            <TableHead className="table-head">
                <TableRow sx={{ backgroundColor: '#a92328' }} >
                <TableCell><strong>Nom</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell><strong>Numéro de téléphone</strong></TableCell>
                <TableCell><strong>Numéro de Siret</strong></TableCell>
                <TableCell><strong>Administrateur</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {companies && companies.map((company, index) => (
                <TableRow key={index}>
                    <TableCell>{company.name.toString()}</TableCell>
                    <TableCell>{company.email.toString()}</TableCell>
                    <TableCell>{company.number.toString()}</TableCell>
                    <TableCell>{company.siretNumber.toString()}</TableCell>
                    <TableCell>{company.isAdmin ? 'Oui' : 'Non'}</TableCell>
                    <TableCell>
                        <strong>
                            <IconButton color="primary" sx={{mr: 2}} onClick={() => navigate(`/company/edit/${company.id}`)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton color="secondary" onClick={() => handleDelete(company.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </strong>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        <ToastContainer position="bottom-right"  />
    </div>
  );
};

export default CompanyDetailsPage;
