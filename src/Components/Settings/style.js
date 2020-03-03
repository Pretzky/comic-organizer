import React from 'react';
import styled from 'styled-components';

export const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-flow: wrap;
  overflow-y: auto;
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

export const ComicSettings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: stretch;
  max-width: 95%;
  padding: 1rem;
  color: #630101;
  font-family: Righteous;

  span {
    font-size: 22px;
  }
`;

export const ComicSetting = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #FF9494;
  height: 3rem;
  min-width: 58rem;
  max-width: 90%;
  margin: 0.5rem;
  border-radius: 5px;

  input {
    color: #297C63;
    font-family: Righteous;
    border: none;
    border-radius: 5px;
    margin-left: 1rem;
    padding: 0.1rem 0.3rem;
    min-width: 12rem;

    :focus {
      outline: none;
    }

    :first-of-type {
      min-width: 15rem;
    }

    :last-of-type {
      min-width: 8rem;
      max-width: 8rem;
    }
  }

  label {
    color: #297C63;
    margin-left: 1rem;
  }
`;

export const PlusButtonWrapper = styled.div`
  padding: 0.5rem;
`;

export const PlusButton = () => {
  return (
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <line x1="9" y1="25" x2="49" y2="25" stroke="#630101" strokeWidth="6"/>
      </g>
      <g filter="url(#filter1_d)">
        <line x1="29" y1="5" x2="29" y2="45" stroke="#630101" strokeWidth="6"/>
      </g>
      <g filter="url(#filter2_d)">
        <rect x="5" y="1" width="48" height="48" rx="4" stroke="#630101" strokeWidth="2"/>
      </g>
      <defs>
        <filter id="filter0_d" x="5" y="22" width="48" height="14" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <filter id="filter1_d" x="22" y="5" width="14" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <filter id="filter2_d" x="0" y="0" width="58" height="58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
      </defs>
    </svg>
  );
};

