import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
`;

export const TitlePage = styled.p`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: #b22222;
`;

export const HrLogin = styled.hr`
  color: #d1cccc;
  width: 100%;
  margin: 20px 0;
  opacity: 30%;
`;

export const ContainerLogin = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px 80px;
  padding: 20px 80px;
  background-color: #1c1c1c;
  border-radius: 4px;
  margin-right: 16px;
  min-height: 280px;
`;

export const TitleLogin = styled.p`
  font-size: 24px;
  font-family: "Anton", sans-serif;
  margin-bottom: 8px;
  color: #fff;
`;

export const DivInput = styled.div`
  flex: 1;
`;

export const InputPlaceHolder = styled.input`
  border: solid 1px #4d4d4d;
  height: 32px;
  width: 100%;
  background: none;

  color: #fff;
  outline: none;
  box-sizing: border-box;
  font-size: 16px;
  padding: 20px;
  justify-content: center;
  margin-bottom: 8px;

  &::placeholder {
    color: #fff;
  }
`;

export const BttLogin = styled.button`
  background-color: #b22222;
  border: none;
  padding: 12px 40px;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
  width: fit-content;
  border-radius: 4px;
  margin-top: 20px;

  &:hover {
    opacity: 80%;
  }
`;

export const ContainerRegister = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px 80px;
  padding: 20px 80px;
  background-color: #1c1c1c;
  border-radius: 4px;
  margin-left: 16px;
  min-height: 320px;
`;

export const TitleRegister = styled.p`
  font-size: 24px;
  font-family: "Anton", sans-serif;
  margin: 2px 0;
  color: #fff;
`;

export const SubTitleRegister = styled.p`
  font-size: 20px;
  font-family: "Anton", sans-serif;
  margin-bottom: 8px;
  color: #b22222;
  margin-top: 32px;
`;

export const ContainerTextRegister = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-top: 16px;
`;

export const IconChecked = styled.img`
  width: 20px;
  margin-right: 4px;
`;

export const TextRegister = styled.p`
  font-size: 14px;
  font-family: "Anton", sans-serif;
  margin: 2px 0;
  color: #fff;
`;

export const BttRegister = styled.button`
  border: 1px solid #b22222;
  padding: 12px 46px;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
  width: fit-content;
  border-radius: 4px;
  margin-top: 20px;
  background: none;

  &:hover {
    opacity: 80%;
  }
`;

export const ContainerFooter = styled.div`
  display: flex;
  position: fixed;
  background-color: #1c1c1c;
  padding: 20px 0;
  bottom: 0;
  width: 100%;
  justify-content: center;
`;

export const TextFooter = styled.p`
  font-size: 16px;
  color: #4d4d4d;
`;
