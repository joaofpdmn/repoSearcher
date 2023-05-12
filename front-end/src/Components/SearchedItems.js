import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { TbGitFork } from "react-icons/tb";
import { BsFillKeyboardFill } from "react-icons/bs";

export default function searchedItems({
  repoName,
  description,
  ownerName,
  repoLanguage,
  starsCount,
  forksCount,
  updatedAt,
}) {
  return (
    <>
      <SearchedItemsContainer>
        <div>
          <h3>{repoName}</h3>
          <span>
            <AiFillStar fill="#fdd700fb" fontSize={19} />
            <h4>{starsCount}</h4>
            <TbGitFork fill="#31a354" fontSize={19} />
            <h4>{forksCount}</h4>
          </span>
        </div>
        <h5>{ownerName}</h5>
        <p>
          {description}
        </p>
        <div>
          <span>
            <BsFillKeyboardFill fill="#272c28" fontSize={19} />
            <h6>{repoLanguage}</h6>
          </span>
          <h6>{updatedAt}</h6>
        </div>
      </SearchedItemsContainer>
    </>
  );
}

const SearchedItemsContainer = styled.li`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 13px;
  background-color: #e5f9e0;
  margin-bottom: 20px;
  min-height: 150px;
  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  span {
    display: flex;
  }
  h3 {
    font-size: 20px;
    font-weight: 700;
  }
  h4 {
    font-size: 16px;
    font-weight: 700;
    padding-inline-end: 5px;
  }
  h5 {
    padding-top: 5px;
    font-size: 14px;
    color: #045a1e;
  }
  h6 {
    padding-top: 5px;
    font-size: 12px;
    color: #045a1e;
    font-weight: 900;
    padding-left: 5px;
  }
  p {
    font-size: 12px;
    padding-top: 30px;
    color: #163a21;
    max-width: 70%;
    padding-bottom: 10px;
  }
`;
