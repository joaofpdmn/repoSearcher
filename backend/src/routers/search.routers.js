import { Router } from "express";
import { getRepositories } from "../controllers/search.controller.js";

const searchRouter = Router();

searchRouter.get("/repositories", getRepositories);

export { searchRouter };