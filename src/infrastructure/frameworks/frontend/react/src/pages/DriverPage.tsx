import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Alert, IconButton } from '@mui/material';
import './DriverPage.css';
import { DriverService } from '../services/driverService';
import { Driver } from '../../../../../../domain/entities/driver.entity';
import SubHeader from '../components/SubHeader';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import Button from '../components/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const DriverDetailsPage: React.FC = () => {
  const [drivers, setDrivers] = useState<Driver[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    fetchDriverData();
  }, []);

  const fetchDriverData = async () => {
    try {
      const data = await DriverService.listDrivers();
      setDrivers(data);
    } catch (error) {
      console.error('Error fetching drivers:', error);
      setError("Erreur lors de la récupération des données des conducteurs.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (driverId: string) => {
    try {
      await DriverService.deleteDriver(driverId);
      toast.success('Le conducteur a été supprimé avec succès !');
      fetchDriverData();
    } catch (error) {
      console.error('An unexpected error has occurred:', error);
      toast.error('Une erreur est survenue lors de la suppression.');
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <div className="driver-page">
      <SubHeader title="Liste des conducteurs" />
      <TableContainer className="table-container">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ marginBottom: '20px', padding: '0 20px' }}
        >
          <BackButton navigateTo='/dashboard' />
          <Button text='Ajouter un conducteur' navigateTo='/driver/create' />
        </Box>
        <Table>
          <TableHead className="table-head">
            <TableRow sx={{ backgroundColor: '#a92328' }}>
              <TableCell><strong>Prénom</strong></TableCell>
              <TableCell><strong>Nom</strong></TableCell>
              <TableCell><strong>Numéro de téléphone</strong></TableCell>
              <TableCell><strong>Numéro de permis</strong></TableCell>
              <TableCell><strong>Années d'expérience</strong></TableCell>
              <TableCell><strong>Entreprise</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {drivers && drivers.map((driver, index) => (
              <TableRow key={index}>
                <TableCell>{driver.firstName.toString()}</TableCell>
                <TableCell>{driver.lastName.toString()}</TableCell>
                <TableCell>{driver.phoneNumber.toString()}</TableCell>
                <TableCell>{driver.licenseNumber.toString()}</TableCell>
                <TableCell>{driver.experienceYears.toString()}</TableCell>
                <TableCell>{driver.company.name.toString()}</TableCell>
                <TableCell>
                  <strong>
                    <IconButton color="primary" sx={{ mr: 2 }} onClick={() => navigate(`/driver/edit/${driver.id}`)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => handleDelete(driver.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </strong>
                </TableCell>
              </TableRow>
            ))}
            {drivers?.length === 0 && 
                <TableRow>
                    <TableCell>Aucune donnée...</TableCell>
                </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default DriverDetailsPage;
