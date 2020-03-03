import React from 'react';
import styled from 'styled-components';

export const DownloadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 10rem);
  width: 100vw;
  padding: 1rem 0rem;
`;

export const DownloadButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem;
  height: 4rem;
  width: 20rem;
  max-width: 20rem;
  font-size: 18px;
  font-family: Righteous;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  background-color: #E2F6CB;
  color: #630101;
  font-family: Righteous;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  :focus {
    outline: none;
  }

  :hover {
    outline: none;
    font-size: 22px;
  }

  :active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const UploadInput = styled.input`
  padding: 1rem 1rem 1rem 7rem;
  color: #630101;
  font-family: Righteous;
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10rem;
  width: 20rem;
  border: 3px solid #630101;
  border-radius: 5px;
  padding: 1rem 0rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;


export const CheckMark = () => {
  return (
    <svg width="60" height="41" viewBox="0 0 60 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="2.14879" y1="12.2373" x2="29.1488" y2="33.2373" stroke="#62A893" strokeWidth="7"/>
      <line x1="56.8" y1="2.1" x2="29.8" y2="38.1" stroke="#62A893" strokeWidth="7"/>
    </svg>
  );
};

