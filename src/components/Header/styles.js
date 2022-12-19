import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  background-color: #000;
  padding: 20px 60px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkHome = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  font-weight: 700;

  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.1);
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const Links = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: #fff;
  margin-left: 32px;
  font-family: "Rockwell";

  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.1);
  }
`;

export const ButtonContact = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  font-family: "Rockwell";

  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.1);
  }
`;
