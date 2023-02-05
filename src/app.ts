import express from "express";
import helmet from "helmet";
import routes from "./routes";
import { notFound, globalError } from "./middlewares/errorHandler";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);
app.use(notFound);
app.use(globalError);

export default app;
