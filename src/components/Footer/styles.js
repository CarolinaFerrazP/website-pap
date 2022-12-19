import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #000;
  flex-direction: column;
  flex-wrap: wrap;
  border-top: 0.1px solid #fff;
`;

export const ContainerMaps = styled.div`
  min-width: 70%;
  margin-top: 20px;
`;

export const TitleMaps = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 8px;
  text-align: center;
  margin-top: 0;
`;

export const Maps = styled.iframe`
  min-width: 100%;
  min-height: 300px;
  border: none;
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #101010;
  justify-content: space-evenly;
`;

export const ContainerSocial = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.img`
  margin-right: 8px;
  width: 20px;
`;

export const TextInfo = styled.p`
  color: #fff;
  font-size: 14px;
  margin: 20px 0;
`;

export const ButtonTop = styled.button`
  background: none;
  border: none;
`;
