import { FastifyInstance } from 'fastify';

export default async function userRoutes(app: FastifyInstance) {
// EXEMPLE :   app.authenticate permet de sécuriser les acces aux routes
// 
// app.post('/', { preValidation: [app.authenticate] } , createUser);  
//          app.get('/:id', { preValidation: [app.authenticate] }, getUser);
}