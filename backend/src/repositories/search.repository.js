import axios from "axios";

export async function findRepositories(term, page) {
  const finalResult = [];
  const search = await axios.get(
    `https://api.github.com/search/repositories?q=${term}&sort=stars&order=desc&page=${page}&per_page=30`
  );
  return search.data.items;
}
