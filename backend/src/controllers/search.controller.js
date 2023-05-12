import httpStatus from "http-status";
import { getRepositoriesByTerm } from "../services/search.service.js";

export async function getRepositories(req, res){
    const { term, page } = req.query;
    try {
        const repositories = await getRepositoriesByTerm(term, page);
        return res.status(httpStatus.OK).send(repositories);
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}