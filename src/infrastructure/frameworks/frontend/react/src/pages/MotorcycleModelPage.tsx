import React, { useState, useEffect } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Alert, IconButton, Backdrop } from '@mui/material';
import SubHeader from '../components/SubHeader';
import { motorcycleModelService } from '../services/motorcycleModelService';
import { MotorcycleModel } from '../../../../../../domain/entities/motorcycle-model.entity';
import { PartialModel } from '../types/modelPartial';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import './MotorcyclePage.css';
import Loading from '../components/Loading';
import BackButton from '../components/BackButton';

const MotorcycleModelPage: React.FC = () => {
  const [motorcycleModels, setMotorcycleModels] = useState<MotorcycleModel[]>([]);
  const [newModel, setNewModel] = useState<PartialModel>({ name: '', maintenanceFrequencyInKilometers: 0 });
  const [showAddForm, setShowAddForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loadingModels, setLoadingModels] = useState<boolean>(true);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    loadMotorcycleModels();
  }, []);

  const loadMotorcycleModels = async () => {
    setLoadingModels(true);
    try {
      const data = await motorcycleModelService.listMotorcycleModels();
      setMotorcycleModels(data);
      setErrorMessage(null);
    } catch (error) {
      console.error('Error fetching motorcycle models:', error);
      setErrorMessage("Erreur lors du chargement des modèles de motos.");
    } finally {
      setLoadingModels(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewModel({ ...newModel, [e.target.name]: e.target.type === 'number' ? Number(e.target.value) : e.target.value });
  };

  const handleAddModel = async () => {
    if (!newModel.name || (newModel.maintenanceFrequencyInKilometers && newModel.maintenanceFrequencyInKilometers <= 0)) {
      setFormError("Tous les champs sont obligatoires et la fréquence de maintenance doit être positive.");
      return;
    }
    try {
      await motorcycleModelService.addMotorcycleModel(newModel);
      loadMotorcycleModels();
      setNewModel({ name: '', maintenanceFrequencyInKilometers: 0 });
      setShowAddForm(false);
      setFormError(null);
    } catch (error) {
      console.error('Error adding motorcycle model:', error);
      setFormError("Impossible d'ajouter le modèle.");
    }
  };

  const handleDeleteModel = async (id: string) => {
    if (!window.confirm("Voulez-vous vraiment supprimer ce modèle ?")) return;
    try {
      await motorcycleModelService.deleteMotorcycleModel(id);
      loadMotorcycleModels();
    } catch (error) {
      console.error("Erreur lors de la suppression du modèle:", error);
      setErrorMessage("Erreur lors de la suppression du modèle.");
    }
  };

  return (
    <div className='motorcycle-page'>
      <SubHeader title="Gestion des modèles de motos" />
      {errorMessage && (
        <Box sx={{ padding: '20px' }}>
          <Alert severity="error">{errorMessage}</Alert>
        </Box>
      )}

      <TableContainer sx={{ marginTop: '20vh', width:'80%', marginLeft:'auto', marginRight:'auto'}} >
        {loadingModels ? (
            <Loading />
        ) : (

          <>
              <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ marginBottom: '20px', padding: '0 20px' }}
              >
              <BackButton navigateTo='/dashboard' />
              <Button variant="contained" startIcon={<AddIcon />} onClick={() => setShowAddForm(true)}>
                Ajouter un modèle
              </Button>
            </Box>
            <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#a92328' }}>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Nom</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Fréquence de maintenance (km)</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {motorcycleModels.map((model) => (
                    <TableRow sx={{ backgroundColor: 'white' }} key={model.id}>
                      <TableCell>{model.name.value}</TableCell>
                      <TableCell>{model.maintenanceFrequencyInKilometers} km</TableCell>
                      <TableCell>
                        <IconButton color="error" onClick={() => handleDeleteModel(model.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table></>
        )}
      </TableContainer>

      <Dialog 
          open={showAddForm} 
          onClose={() => setShowAddForm(false)} 
          BackdropComponent={(props) => (
            <Backdrop {...props} style={{ backgroundColor: 'white' }} />
          )}
      >
        <DialogTitle>Ajouter un modèle de moto</DialogTitle>
        <DialogContent>
          {formError && <Alert severity="error" sx={{ marginBottom: '10px' }}>{formError}</Alert>}
          <TextField
            label="Nom du modèle"
            name="name"
            fullWidth
            margin="dense"
            value={newModel.name}
            onChange={handleInputChange}
          />
          <TextField
            label="Fréquence de maintenance (en km)"
            name="maintenanceFrequencyInKilometers"
            type="number"
            fullWidth
            margin="dense"
            value={newModel.maintenanceFrequencyInKilometers}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddModel} variant="contained" color="primary">Ajouter</Button>
          <Button onClick={() => setShowAddForm(false)} color="secondary">Annuler</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MotorcycleModelPage;
