import styled from 'styled-components';
import { mediaQuery } from '../../media';

export const StyledImagesContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  .image-column {
    flex: 100%;
    max-width: 100%;
    padding: 0 4px;
    @media (min-width: 450px) {
      flex: 50%;
      max-width: 50%;
    }
    @media (min-width: ${mediaQuery.tablet}) {
      flex: 33%;
      max-width: 33%;
    }
    @media (min-width: ${mediaQuery.desktop}) {
      flex: 25%;
      max-width: 25%;
    }
  }
`;

export const StyledImageCard = styled.article`
  .image {
    position: relative;
    height: 95%;
    width: 100%;

    img {
      vertical-align: middle;
      height: 100%;
      width: 100%;
    }
    .image-overlay {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.4);
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      transition: 0.3s ease-in-out;
      &:hover {
        opacity: 1;
      }
      .user {
        width: 100%;
        min-height: 10%;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        p {
          font-size: 2vh;
          color: white;
          padding: 0 1vh;
          font-family: $paragraph;
        }
        .profile-img {
          height: 3vh;
          width: 3vh;
          margin: 1vh;
          img {
            opacity: 1 !important;
            border-radius: 50%;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`;

export const StyledImageFooter = styled.footer`
  height: 5%;
  width: 100%;
  display: flex;
  padding: 1vh 0;
  .tag {
    border: none;
    margin-right: 0.5rem;
    font-size: 2vh;
    text-align: center;
    background: rgba(166, 166, 166, 0.5);
    color: rgba(0, 0, 0, 0.8);
    text-transform: capitalize;
    padding: 0.25rem;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      background: rgba(166, 166, 166, 0.3);
    }
  }
`;
