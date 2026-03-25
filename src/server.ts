import app from './app';
import dotenv from 'dotenv';
import helmet from "helmet";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT || 3000;
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});