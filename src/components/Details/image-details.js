import styled from 'styled-components';

export const StyledImageDetails = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  .header {
    display: flex;
    justify-content: space-between;
    min-height: 5vh;
    padding: 1rem 0;
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
      align-items: center;
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
      cursor: zoom-in;
      width: 100%;
      height: 100%;
      object-fit: contain;
      /* box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12); */
    }
  }
  .footer {
    height: 5vh;
  }
`;
