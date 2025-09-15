const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Word Search API',
            version: '1.0.0',
        },
        servers: [
            {
                url: "https://backend-sopa-production.up.railway.app/api",
                description: 'Servidor de desarrollo'
            }
        ],
    },
    apis: ['./Search/Router/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;


