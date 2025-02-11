import React, { useState, useEffect } from "react";
import SubHeader from "../components/SubHeader";
import { motorcycleService } from "../services/motorcycleService";
import { motorcycleModelService } from "../services/motorcycleModelService";
import { CompanyService } from "../services/companyService";
import { Motorcycle } from "../../../../../../domain/entities/motorcycle.entity";
import { MotorcycleModel } from "../../../../../../domain/entities/motorcycle-model.entity";
import { Company } from "../../../../../../domain/entities/company.entity";
import "./MotorcyclePage.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Loading from "../components/Loading";
import { PartialMotorcycle } from "../types/motorcyclePartial";
import {
  Alert,
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import BackButton from "../components/BackButton";

const MotorcyclePage: React.FC = () => {
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);
  const [motorcycleModels, setMotorcycleModels] = useState<MotorcycleModel[]>(
    []
  );
  const [companies, setCompanies] = useState<Company[]>([]);

  const [newMotorcycle, setNewMotorcycle] = useState<PartialMotorcycle>({
    modelId: "",
    mileage: 0,
    status: "AVAILABLE" as Motorcycle["status"],
    companyId: "",
  });

  const [editMotorcycle, setEditMotorcycle] = useState<{
    id: string;
    mileage: number;
    status: Motorcycle["status"];
  } | null>(null);

  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loadingMotorcycles, setLoadingMotorcycles] = useState<boolean>(true);
  const [loadingModels, setLoadingModels] = useState<boolean>(true);
  const [loadingCompanies, setLoadingCompanies] = useState<boolean>(true);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    loadMotorcycles();
    loadMotorcycleModels();
    loadCompanies();
  }, []);

  const statusLabels: Record<string, string> = {
    AVAILABLE: "Disponible",
    IN_MAINTENANCE: "En maintenance",
    RENTED: "Louée",
    DECOMMISSIONED: "Hors service",
  };

  const loadMotorcycles = async () => {
    setLoadingMotorcycles(true);
    try {
      const data = await motorcycleService.listMotorcycles();
      setMotorcycles(data);
      setErrorMessage(null);
    } catch (error) {
      console.error("Error fetching motorcycles:", error);
      setErrorMessage("Erreur lors du chargement des motos.");
    } finally {
      setLoadingMotorcycles(false);
    }
  };

  const loadMotorcycleModels = async () => {
    setLoadingModels(true);
    try {
      const data = await motorcycleModelService.listMotorcycleModels();
      setMotorcycleModels(data);
    } catch (error) {
      console.error("Error fetching motorcycle models:", error);
      setErrorMessage("Erreur lors du chargement des modèles de motos.");
    } finally {
      setLoadingModels(false);
    }
  };

  const loadCompanies = async () => {
    setLoadingCompanies(true);
    try {
      const data = await CompanyService.listCompanies();
      setCompanies(data);
    } catch (error) {
      console.error("Error fetching companies:", error);
      setErrorMessage("Erreur lors du chargement des entreprises.");
    } finally {
      setLoadingCompanies(false);
    }
  };

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewMotorcycle((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewMotorcycle((prev) => ({ ...prev, [name]: value }));
  };
  

  const handleAddMotorcycle = async () => {
    setFormError("");
    if (
      !newMotorcycle.modelId ||
      (newMotorcycle.mileage && newMotorcycle.mileage < 0) ||
      !newMotorcycle.companyId
    ) {
      setFormError(
        "Tous les champs sont obligatoires et le kilométrage doit être positif."
      );
      return;
    }

    try {
      await motorcycleService.addMotorcycle(newMotorcycle);
      loadMotorcycles();
      setNewMotorcycle({
        modelId: "",
        mileage: 0,
        status: "AVAILABLE",
        companyId: "",
      });
      setShowAddForm(false);
      setFormError(null);
    } catch (error) {
      console.error("Error adding motorcycle:", error);
      setFormError(
        "Impossible d'ajouter la moto. Vérifiez les données saisies."
      );
    }
  };

  const handleEditMotorcycle = async () => {
    if (!editMotorcycle) return;

    try {
      await motorcycleService.updateMotorcycle(editMotorcycle.id, {
        mileage: editMotorcycle.mileage,
        status: editMotorcycle.status,
      });
      loadMotorcycles();
      setShowEditForm(false);
    } catch (error) {
      console.error("Error updating motorcycle:", error);
      setErrorMessage("Erreur lors de la mise à jour de la moto.");
    }
  };

  const handleDeleteMotorcycle = async (id: string) => {
    if (!window.confirm("Voulez-vous vraiment supprimer cette moto ?")) return;

    try {
      await motorcycleService.deleteMotorcycle(id);
      loadMotorcycles();
    } catch (error) {
      console.error("Erreur lors de la suppression de la moto:", error);
      setErrorMessage("Erreur lors de la suppression de la moto.");
    }
  };

  if (loadingModels  || loadingCompanies) {
    return <Loading />;
  }

  return (
    <div className="motorcycle-page">
      <SubHeader title="Gestion des motos" />

      {errorMessage && (
        <Box sx={{ padding: "20px" }}>
          <Alert severity="error">{errorMessage}</Alert>
        </Box>
      )}

      <TableContainer  sx={{ marginTop: '20vh', width:'80%', marginLeft:'auto', marginRight:'auto'}}>
        {loadingMotorcycles ? (
          <Loading />
        ) : (
          <div>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ marginBottom: "20px", padding: "0 20px" }}
            >
              <BackButton navigateTo="/dashboard" />
              <Button variant="contained" onClick={() => setShowAddForm(true)}>
                Ajouter une moto
              </Button>
            </Box>
            <Table>
              <TableHead className="table-head">
                <TableRow sx={{ backgroundColor: "#a92328" }}>
                  <TableCell>
                    <strong>Modèle</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Kilométrage</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Statut</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Entreprise</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Actions</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {motorcycles.map((moto) => (
                  <TableRow sx={{ backgroundColor: 'white' }} key={moto.id}>
                    <TableCell>
                      {motorcycleModels
                        .find((model) => model.id === moto.modelId)
                        ?.name.toString() || "Modèle inconnu"}
                    </TableCell>
                    <TableCell>{moto.mileage.toString()} km</TableCell>
                    <TableCell>
                      {statusLabels[moto.status] || "Statut inconnu"}
                    </TableCell>
                    <TableCell>
                      {companies
                        .find((company) => company.id === moto.companyId)
                        ?.name.toString() || "Entreprise inconnue"}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() =>
                          setEditMotorcycle({
                            id: moto.id,
                            mileage: Number(moto.mileage),
                            status: moto.status,
                          })
                        }
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleDeleteMotorcycle(moto.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </TableContainer>
      {showAddForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Ajouter une nouvelle moto</h2>
              {formError && <p className="error-message">{formError}</p>}
              
              <select name="modelId" value={newMotorcycle.modelId} onChange={handleSelectChange}>
                <option value="">Sélectionner un modèle</option>
                {motorcycleModels.map((model) => (
                  <option key={model.id} value={model.id}>{model.name.toString()}</option>
                ))}
              </select>

              <select
                value={newMotorcycle.status}
                onChange={(e) => setNewMotorcycle({ ...newMotorcycle, status: e.target.value as Motorcycle['status'] })}
              >
                <option value="AVAILABLE">Disponible</option>
                <option value="IN_MAINTENANCE">En maintenance</option>
                <option value="RENTED">Louée</option>
                <option value="DECOMMISSIONED">Hors service</option>
              </select>

              <select name="companyId" value={newMotorcycle.companyId} onChange={handleSelectChange}>
                <option value="">Sélectionner une entreprise</option>
                {companies.map((company) => (
                  <option key={company.id} value={company.id}>{company.name?.value || company.name.toString()}</option>
                ))}
              </select>

              <input type="number" name="mileage" placeholder="Kilométrage" value={newMotorcycle.mileage} onChange={handleTextFieldChange} />

              <button onClick={handleAddMotorcycle}>Ajouter</button>
              <button className="cancel" onClick={() => setShowAddForm(false)}>Annuler</button>
            </div>
          </div>
        )}

        {showEditForm && editMotorcycle && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Modifier la moto</h2>

              <input type="number" value={editMotorcycle.mileage} onChange={(e) => setEditMotorcycle({ ...editMotorcycle, mileage: parseInt(e.target.value, 10) })} />

              <select value={editMotorcycle.status} onChange={(e) => setEditMotorcycle({ ...editMotorcycle, status: e.target.value as Motorcycle['status'] })}>
                <option value="AVAILABLE">Disponible</option>
                <option value="IN_MAINTENANCE">En maintenance</option>
                <option value="RENTED">Louée</option>
                <option value="DECOMMISSIONED">Hors service</option>
              </select>

              <button onClick={handleEditMotorcycle}>Mettre à jour</button>
              <button className="cancel" onClick={() => setShowEditForm(false)}>Annuler</button>
            </div>
          </div>
        )}
    </div>
  );
};

export default MotorcyclePage;
