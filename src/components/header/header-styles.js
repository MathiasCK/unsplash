import styled from 'styled-components';

export const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem;
  h2 {
    font-weight: 100;
    font-size: 3vh;
    font-family: $paragraph;
  }
  .buttons {
    margin: 0 1rem;
    display: flex;
    align-items: center;
    .page {
      margin: 0 0.5rem;
      font-size: 2vh;
    }
    button {
      font-size: 2vh;
      padding: 0.25rem 0.5rem;
      background: transparent;
      border: 1px solid black;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover {
        background: black;
        color: white;
      }
    }
  }
`;
