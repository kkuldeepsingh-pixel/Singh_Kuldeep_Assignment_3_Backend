import fs from 'fs';
import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Assignment 3 Backend API',
      version: '1.0.0',
      description: 'API documentation for Assignment 3 backend project',
    },
    servers: [{ url: 'http://localhost:3000' }],
  },
  apis: ['./src/api/v1/routes/*.ts'], 
};

const swaggerSpec = swaggerJSDoc(options);

if (!fs.existsSync('./docs')) fs.mkdirSync('./docs');
fs.writeFileSync('./docs/openapi.json', JSON.stringify(swaggerSpec, null, 2));
console.log('Swagger JSON generated in docs/openapi.json');