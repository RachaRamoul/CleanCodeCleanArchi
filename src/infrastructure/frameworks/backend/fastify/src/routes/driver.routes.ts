import { FastifyInstance } from 'fastify';
import { DriverController } from '../controllers/driver.controller';
import { authenticate } from '../middlewares/auth.decorator';

const driverController = new DriverController();

export default async function driverRoutes(app: FastifyInstance) {
// INFO :   { onRequest: [authenticate] } permet de sécuriser les acces aux routes
    app.post('/', { onRequest: [authenticate] }, (req, reply) => driverController.addDriver(req, reply));
    
    app.get('/:id', { onRequest: [authenticate] }, (req, reply) => driverController.getDriverById(req, reply));

    app.get('/all', { onRequest: [authenticate] }, (req, reply) => driverController.getDrivers(req, reply));

    app.get('/company/:companyId', { onRequest: [authenticate] }, (req, reply) => driverController.getDriversByCompanyId(req, reply));

    app.put('/:id', { onRequest: [authenticate] }, (req, reply) => driverController.updateDriver(req, reply));

    app.delete('/:id', { onRequest: [authenticate] }, (req, reply) => driverController.deleteDriver(req, reply));
}