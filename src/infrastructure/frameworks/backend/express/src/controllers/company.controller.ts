import { Request, Response } from 'express';
import { CompanyService } from '../services/company.service';

const companyService = new CompanyService();

export const getFilteredCompanyById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { fields } = req.query;
    
    const requestedFields = typeof fields === 'string' ? fields.split(',') : undefined;
    const company = await companyService.getCompanyById(id, requestedFields);

    if (!company) {
      res.status(404).json({ message: 'Company not found' });
      return;
    }
    res.status(200).json(company);

  } catch (error) {
    console.error('Error fetching company by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const createCompany = async (req: Request, res: Response) => {
  try {
    const { name, email, number, siretNumber, isAdmin, password } = req.body;
    const company = await companyService.createCompany(name, email, number, siretNumber, isAdmin, password);

    res.status(201).json(company);

  } catch (error) {
    console.error('Error creating company:', error);
    res.status(400).json({ message: error.message });
  }
};

export const getAllCompanies = async (_req: Request, res: Response) => {
  try {
    const companies = await companyService.listCompanies();
    res.status(200).json(companies);
  } catch (error) {
    console.error('Error fetching companies:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateCompany = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedCompany = await companyService.updateCompany(id, updateData);
    res.status(200).json(updatedCompany);

  } catch (error) {
    console.error('Error updating company:', error);

    if (error.message === 'Company not found') {
      res.status(404).json({ message: error.message });
    } else {
      res.status(400).json({ message: error.message });
    }
  }
};

export const deleteCompany = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await companyService.deleteCompany(id);
    res.sendStatus(204); 

  } catch (error) {
    console.error('Error deleting company:', error);
    
    if (error.message === 'Company not found') {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};
