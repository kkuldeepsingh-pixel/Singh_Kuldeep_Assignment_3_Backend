import app from './app';
import dotenv from 'dotenv';
import helmet from "helmet";
import cors from "cors";
import { setupSwagger } from './api/v1/controllers/swagger';
import eventRoutes from './api/v1/routes/eventRoutes';
dotenv.config();

const PORT = process.env.PORT || 3000;

// Routes must be used before Swagger setup
app.use('/api/v1', eventRoutes);

// Security middlewares
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Swagger setup
setupSwagger(app); 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});