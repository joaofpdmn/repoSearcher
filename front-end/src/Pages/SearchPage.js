import styled from "styled-components";
import SearchBar from "../Components/SearchBar";
import SearchedItems from "../Components/SearchedItems";
import SearchedItemsContainer from "../Components/SearchedItemsContainer";
import { useState } from "react";
import axios from "axios";

export default function SearchPageContainer() {
  const [items, setItems] = useState([]);
  const [term, setTerm] = useState("");
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    getItems(term);
    setClicked(true);
  }

  async function getItems(term) {
    try {
      const items = await axios.get("http://localhost:4000/repositories", {
        params: {
          term: term,
          page: count,
        },
      });
      setItems(items.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <SearchPageContainerStyle>
        <h1>Repo Searcher</h1>
        <h2>Faça sua busca:</h2>
        <form onSubmit={handleSubmit}>
          <SearchBar
            placeholder="Insira o texto aqui"
            onChange={(e) => setTerm(e.target.value)}
          ></SearchBar>
          <button type="submit"></button>
        </form>
        <SearchedItemsContainer>
          {clicked === false ? (
            ""
          ) : (
            <>
              {items.map((item) => (
                <SearchedItems
                  repoName={item.repoName}
                  description={item.description}
                  ownerName={item.ownerName}
                  repoLanguage={item.repoLanguage}
                  starsCount={item.starsCount}
                  forksCount={item.forksCount}
                  updatedAt={item.updatedAt}
                />
              ))}
            </>
          )}
        </SearchedItemsContainer>
      </SearchPageContainerStyle>
    </>
  );
}

const SearchPageContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px;
  color: #31a354;
  h1 {
    font-size: 48px;
    font-weight: 900;
    padding-bottom: 30px;
  }
  h2 {
    font-size: 30px;
    font-weight: 400;
    padding-bottom: 30px;
  }
  form {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  button {
    display: none;
  }
`;