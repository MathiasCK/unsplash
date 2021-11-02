import styled from 'styled-components';
import { mediaQuery } from '../../media';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background-image: url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80');
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledSearch = styled.div`
  @media (min-width: ${mediaQuery.mobile}) {
    width: 90%;
  }
  @media (min-width: ${mediaQuery.tablet}) {
    width: 70%;
  }
  @media (min-width: ${mediaQuery.desktop}) {
    width: 50%;
  }
  width: 100%;
`;

export const StyledInfo = styled.div`
  color: white;
  width: 100%;
  height: 20%;
  @media (min-width: 450px) {
    width: 80%;
  }
  @media (min-width: ${mediaQuery.tablet}) {
    width: 60%;
  }
  @media (min-width: ${mediaQuery.desktop}) {
    width: 50%;
  }
  h4 {
    font-family: $header;
    font-size: 4vh;
    padding: 1rem 0;
  }
  p {
    font-family: $paragraph;
    padding-bottom: 1rem;
    font-size: 2vh;
  }
`;

export const StyledFormControl = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  input {
    padding: 1vh;
    outline: none;
    width: 100%;
    border: none;
  }
  button {
    padding: 1rem;
    border: none;
    background: white;
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
      background: whitesmoke;
    }
  }
`;

export const StyledTrends = styled.div`
  font-size: 2vh;
  color: white;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-around;

  .trendy {
    color: white;
    background: transparent;
    cursor: pointer;
    font-family: $paragraph !important;
    border: none;
    transition: 0.3s;
    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;
