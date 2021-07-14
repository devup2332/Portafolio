import express from "express";
import { environments } from "./environments";
import cors from "cors";
import morgan from "morgan";
import ApiRouter from "./routes/api.routes";

const server = express();

//Configurations
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

//Routes
server.use("/api", ApiRouter);

server.listen(environments.PORT, () => {
  console.log(`Serve on port ${environments.PORT}`);
});

export default server;
