import { findRepositories } from "../repositories/search.repository.js";

export async function getRepositoriesByTerm(term, page){
    const filteredRepositories = [];
    try {
        const repositories = await findRepositories(term, page);
        for(let i=0;i<repositories.length;i++){
            let body = {
                repoName: repositories[i].name,
                description: repositories[i].description,
                ownerName: repositories[i].owner.login,
                repoLanguage: repositories[i].language,
                starsCount: repositories[i].stargazers_count,
                forksCount: repositories[i].forks_count,
                updatedAt: repositories[i].updated_at
            }
            filteredRepositories.push(body);
        }
        return filteredRepositories;
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}