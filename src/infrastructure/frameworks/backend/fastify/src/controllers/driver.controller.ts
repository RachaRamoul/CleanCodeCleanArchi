import { FastifyRequest, FastifyReply } from 'fastify';
import { DriverService } from '../services/driver.service';
import { Driver } from '../../../../../../domain/entities/driver.entity';

export class DriverController {
  constructor(private driverService: DriverService = new DriverService()) {}

  async addDriver(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { firstName, lastName, companyId, phoneNumber, licenseNumber, experienceYears } = req.body as {
        firstName: string;
        lastName: string;
        companyId: string;
        phoneNumber: string;
        licenseNumber: string;
        experienceYears: number;
      };
      const newDriver = await this.driverService.addDriver(firstName, lastName, companyId, phoneNumber, licenseNumber, experienceYears);

      reply.status(201).send(newDriver);

    } catch (error) {
      console.error('Error creating driver:', error);
      reply.status(400).send({ error: error.message });
    }
  }

  async getDriverById(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = req.params as { id: string };
      const driver = await this.driverService.getDriverById(id);
      
      if (!driver) {
        reply.status(404).send({ message: 'Driver not found' });
        return;
      }
      reply.status(200).send(driver);

    } catch (error) {
      console.error('Error fetching driver by ID:', error);
      reply.status(400).send({ error: error.message });
    }
  }

  async getDrivers(req: FastifyRequest, reply: FastifyReply) {
    try {
        const drivers = await this.driverService.listDrivers();
        reply.status(200).send(drivers);
    } catch (error) {
        reply.status(400).send({ error: error.message });
    }
  }

  async getDriversByCompanyId(req: FastifyRequest, reply: FastifyReply) {
    try {
        const { companyId } = req.params as { companyId : string };
        
        if (!companyId) {
            reply.status(400).send({ message: 'Company ID is required' });
            return;
        }
        const drivers = await this.driverService.listDrivers(companyId);
        reply.status(200).send(drivers);
    } catch (error) {
        reply.status(500).send({ message: 'Internal server error' });
    }
};

  async updateDriver(req: FastifyRequest, reply: FastifyReply) {
    try {
        const { id } = req.params as { id: string };
        const driverUpdateData = req.body as Partial<Driver>;

        const updatedDriver = await this.driverService.updateDriver(id, driverUpdateData);
        reply.status(200).send(updatedDriver);
    } catch (error) {
        reply.status(400).send({ error: error.message });
    }
  }

  async deleteDriver(req: FastifyRequest, reply: FastifyReply) {
    try {
        const { id } = req.params as { id: string };
        await this.driverService.deleteDriver(id);
        reply.status(204).send(); 
    } catch (error) {
        reply.status(400).send({ error: error.message });
    }
  }
}
