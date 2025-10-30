const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../resources/swagger.json');
const { authMiddleware } = require('./service/authService');
const routes = require('./routes');

const app = express();
app.use(express.json());

// Swagger endpoint
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API routes
app.use('/api', routes);

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
