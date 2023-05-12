import styled from 'styled-components';

const SearchBar = styled.input`
display: flex;
justify-content: center;
background-color: #f5f5f5;
border-radius: 5px;
border: none;
min-width: 70%;
min-height: 40px;
margin-bottom: 20px;
box-sizing: border-box;
padding: 10px;
::placeholder {
    padding-left: 10px;
    font-style: italic;
}
`

export default SearchBar;