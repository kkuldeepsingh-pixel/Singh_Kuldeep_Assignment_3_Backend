import app from './app';
import dotenv from 'dotenv';
import helmet from "helmet";
import cors from "cors";
import { setupSwagger } from './swagger';
dotenv.config();

const PORT = process.env.PORT || 3000;
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

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