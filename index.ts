import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
//
import express, { NextFunction, Request, Response } from "express";
import './config/use-mongodb'
import helmet from "helmet";
import morgan from "morgan";

// APP
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(function (req: Request, res: Response, next: NextFunction) {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

// PORT for app
const PORT: number = parseInt(process.env.PORT!);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.use(
  express.urlencoded({
    extended: true,
  })
);

// import all routes
import postRoutes from "./src/routes/post.routes";
import userPostRoutes from "./src/routes/user-post.routes";
import userRoutes from "./src/routes/user.routes";
import userInterest from './src/routes/user-interest.routes'

// Routes
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/user-post", userPostRoutes);
app.use("/api/user-interest", userInterest)

// Default route
app.use("/", (req, res) => {
  res.status(200).send("Well connected");
});

// If no route matches
app.use((req, res, next) => {
  //
});
