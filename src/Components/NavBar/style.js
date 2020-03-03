import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 8rem;
  max-height: 8rem;
  width: 100vw;
  background: #FF9494;
`;

export const NavButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 15rem;
  max-width: 15rem;
  color: #297C63;
  font-family: Righteous;
  text-decoration: none;
  background-color: #FFFFFF;
  border-radius: 5px;
  border: none;
  margin: 2rem;
  box-shadow: ${props => (props.selected ? 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)' : '0px 4px 4px rgba(0, 0, 0, 0.25)')};
  font-size: ${props => (props.selected ? '22px' : '18px')};
  
  :focus {
    outline: none;
  }

  :hover {
    outline: none;
    font-size: 22px;
  }
`;