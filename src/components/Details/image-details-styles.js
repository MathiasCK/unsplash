import styled from 'styled-components';
import { mediaQuery } from '../../media';

export const StyledImageDetails = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  .header {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 5vh;
    padding: 1rem 0;
    @media (min-width: ${mediaQuery.mobile}) {
      flex-direction: row;
    }
    .user {
      display: flex;
      align-items: center;
      .user-image {
        img {
          border-radius: 50px;
          margin-right: 1rem;
        }
      }
      .user-info {
        .name {
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
    }
    .actions {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      a {
        margin: 0.25rem 0 !important;
      }
      @media (min-width: ${mediaQuery.mobile}) {
        flex-direction: row;
        a {
          margin: 0 !important;
        }
      }
      .button {
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        background: #3cb46e;
        padding: 0.5rem;
        color: white;
        height: 100%;
        text-decoration: none;
        &:hover {
          background: #37a866;
        }
      }
      .link {
        height: 100%;
        background: #0082f0;
        color: white;
        text-decoration: none;
        padding: 0.5rem;
        transition: all 0.3s ease-in-out;
        margin: 0 0.5rem;
        &:hover {
          background: #0068c0;
        }
      }
    }
  }
  .image {
    width: 100%;
    height: 90vh;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .footer {
    min-height: 5vh;
    h1 {
      font-family: $header;
      font-weight: lighter;
      margin: 0.25rem 0;
      font-size: 3vh;
    }
    .footer__statstics {
      display: flex;
      justify-content: flex-start;

      .footer-statistics--statistic {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin: 0 0.5rem;
        h1 {
          font-size: 2vh;
        }
        p {
          font-family: $paragraph;
          font-weight: 700;
        }
      }
    }
    .footer__info {
      padding: 1rem 0;

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
      margin: 1rem 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      button {
        font-size: 2vh;
        margin: 0.25rem;
      }
    }
  }
`;
