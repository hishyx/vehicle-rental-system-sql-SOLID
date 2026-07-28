import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";

import allRouters from "./routes/routes.js";

const app = express();

app.use(methodOverride("_method"));


// Needed because you're using ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static('public'));

app.use(allRouters);

export default app;