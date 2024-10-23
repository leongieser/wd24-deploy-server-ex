import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.json({ message: "Our deployed server is live" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
