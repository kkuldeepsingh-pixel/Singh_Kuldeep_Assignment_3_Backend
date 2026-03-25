import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Assignment 3 Backend API',
      version: '1.0.0',
      description: 'API documentation for Assignment 3 backend project',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  
  apis: ['./src/api/v1/routes/*.ts'], 
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

/**
 * @openapi
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         date:
 *           type: string
 *           format: date
 *     CreateEvent:
 *       type: object
 *       required:
 *         - name
 *         - date
 *       properties:
 *         name:
 *           type: string
 *         date:
 *           type: string
 *           format: date
 *     UpdateEvent:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         date:
 *           type: string
 *           format: date
 */