import React from "react";
import {
  Container,
  TitlePage,
  ContainerLogin,
  TitleLogin,
  HrLogin,
  InputPlaceHolder,
  DivInput,
  BttLogin,
  ContainerRegister,
  TitleRegister,
  SubTitleRegister,
  ContainerTextRegister,
  IconChecked,
  TextRegister,
  BttRegister,
  ContainerFooter,
  TextFooter,
} from "./styles";
import Checked from "../../assets/check.svg";

const Login = () => {
  return (
    <>
      <TitlePage>Report for Repair</TitlePage>
      <Container>
        <ContainerLogin>
          <TitleLogin>Entra na tua conta Report for Repair</TitleLogin>
          <HrLogin />
          <DivInput>
            <InputPlaceHolder placeholder="Email" />
            <InputPlaceHolder placeholder="Password" />
          </DivInput>
          <BttLogin>Iniciar sessao</BttLogin>
        </ContainerLogin>
        <ContainerRegister>
          <TitleRegister>Ainda não tens conta?</TitleRegister>
          <TitleRegister>Regista-te agora!</TitleRegister>
          <SubTitleRegister>Fácil e rápido!</SubTitleRegister>
          <ContainerTextRegister>
            <IconChecked src={Checked} alt="Icon" />
            <TextRegister>Acompanha os teus pedidos</TextRegister>
          </ContainerTextRegister>
          <ContainerTextRegister>
            <IconChecked src={Checked} alt="Icon" />
            <TextRegister>
              Guarda os teus detalhes de pagamento e de envio e poupa tempo
            </TextRegister>
          </ContainerTextRegister>
          <ContainerTextRegister>
            <IconChecked src={Checked} alt="Icon" />
            <TextRegister>Faz devoluções online</TextRegister>
          </ContainerTextRegister>
          <BttRegister>Criar Conta</BttRegister>
        </ContainerRegister>
      </Container>
      <ContainerFooter>
        <TextFooter>
          @2022 REPORTFORREPAIR todos os direitos reservados.
        </TextFooter>
      </ContainerFooter>
    </>
  );
};

export default Login;
