import app from './app';
import dotenv from 'dotenv';
import helmet from "helmet";
import cors from "cors";
import { setupSwagger } from './api/v1/controllers/swagger';
import eventRoutes from './api/v1/routes/eventRoutes';

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(helmet());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  next();
});


app.use('/api/v1', eventRoutes);


setupSwagger(app);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});