import styled from 'styled-components';
import { mediaQuery } from '../../media';

export const StyledImageDetails = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 5vh;
  padding: 1rem 0;
  @media (min-width: ${mediaQuery.mobile}) {
    flex-direction: row;
  }
`;

export const StyledUser = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Roboto:wght@100;300&display=swap');

  display: flex;
  align-items: center;
  .user__image {
    img {
      border-radius: 50px;
      margin-right: 1rem;
    }
  }
  .user__info {
    font-size: 2vh;
    .user__info--name {
      font-family: 'Roboto', sans-serif;
    }
    a {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.5);
      transition: all 0.3s ease-in-out;
      &:hover {
        color: rgba(0, 0, 0, 0.8);
      }
    }
  }
`;

export const StyledActions = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  a {
    margin: 0.25rem 0 !important;
    font-size: 2vh;
  }
  @media (min-width: ${mediaQuery.mobile}) {
    flex-direction: row;
    a {
      margin: 0 !important;
    }
  }
  .actions__button {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    background: #3cb46e;
    padding: 0.5rem;
    color: white;
    text-decoration: none;
    &:hover {
      background: #37a866;
    }
  }
  .actions__link {
    background: #0082f0;
    color: white;
    text-decoration: none;
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: #0068c0;
    }
  }
`;

export const StyledImage = styled.div`
  height: 50vh;
  @media (min-width: ${mediaQuery.mobile}) {
    height: 90vh;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const StyledFooter = styled.footer`
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Roboto:wght@100;300;500;900&display=swap');
  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    margin: 0.25rem 0;
    font-size: 3vh;
  }
  .footer__statstics {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 2vh 0;
    .footer-statistics--statistic {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-right: 1rem;
      h1 {
        font-size: 2vh !important;
      }
      p {
        font-family: 'Roboto', sans-serif;
      }
    }
  }
  .footer__info {
    margin: 2vh 0;
    font-family: 'Roboto', sans-serif;
    .footer__info--info {
      display: flex;
      color: rgba(0, 0, 0, 0.5);
      font-weight: lighter;
      transition: all 0.3s ease-in-out;
      svg {
        margin-right: 0.25rem;
      }
      &:hover {
        color: black;
      }
    }
  }
  .footer__tags {
    margin: 2vh 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    button {
      font-size: 2vh;
      margin: 0.25rem 0.25rem 0 0;
    }
  }
`;
