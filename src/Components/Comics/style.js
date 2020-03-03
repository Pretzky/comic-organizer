import React from 'react';
import styled from 'styled-components';

export const ComicsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-flow: wrap;
  overflow-y: auto;
  color: #297C63;
  font-weight: 600;
  height: calc(100vh - 10rem);
  width: 100vw;
  padding: 1rem 0rem;

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.334rem;
    background-color: #FFFFFF;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #297C63;
    border-radius: 1rem;
  }
  ::-webkit-scrollbar-track {
    background-color: #FFFFFF;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 20rem;
  width: 15rem;
  background-color: #E2F6CB;
  border-radius: 10px;
  font-family: Righteous;
  color: #297C63;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 1rem;

  div {
    display: flex;

    :first-of-type {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 0.5rem 0.25rem 0.5rem;
    }

    :last-of-type {
      flex-direction: column;
      padding: 0.25rem 0.5rem 0rem 0.5rem;
      line-height: 1.5rem;
      height: 4.75rem;

      span:last-of-type {
        font-size: 12px;
        align-self: flex-end;
        justify-self: flex-end;
      }
    }
  }

  section{
    background: #62A893;
    width: 100%;
    height: 15rem;
  }
`;

export const ExternalLink = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="22" height="22" rx="5" stroke="#297C63" strokeWidth="2" />
      <path d="M18.3137 6.68629C18.3137 6.13401 17.866 5.68629 17.3137 5.68629L8.31371 5.68629C7.76142 5.68629 7.31371 6.13401 7.31371 6.68629C7.31371 7.23858 7.76142 7.68629 8.31371 7.68629H16.3137V15.6863C16.3137 16.2386 16.7614 16.6863 17.3137 16.6863C17.866 16.6863 18.3137 16.2386 18.3137 15.6863L18.3137 6.68629ZM6.70711 18.7071L18.0208 7.3934L16.6066 5.97918L5.29289 17.2929L6.70711 18.7071Z" fill="#297C63" />
    </svg>
  );
};

