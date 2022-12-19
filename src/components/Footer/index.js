import {
    Container,
    TitleMaps,
    ContainerMaps,
    Maps,
    ContainerInfo,
    ContainerSocial,
    Icon,
    TextInfo,
    ButtonTop,
  } from "./styles";
  import IconPhone from "../../assets/phone.svg";
  import IconEmail from "../../assets/email.svg";
  import IconLocation from "../../assets/location.svg";
  import IconArrow from "../../assets/arrow.svg";
  
  const Footer = () => {
    var scrollTop = function () {
      window.scrollTo(0, 0);
    };
  
    return (
      <>
        <Container>
          <ContainerMaps>
            <TitleMaps>Location:</TitleMaps>
            {/* TODO: alterar o mapa, chamar do BE */}
            <Maps src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96089.48956807777!2d-8.820025783593724!3d41.18260449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246f47c705cceb%3A0x8d9046c1ad27f005!2sEscola%20Secund%C3%A1ria%20Augusto%20Gomes!5e0!3m2!1spt-PT!2spt!4v1668424665088!5m2!1spt-PT!2spt"></Maps>
          </ContainerMaps>
          <ContainerInfo>
            <ContainerSocial>
              <Icon src={IconEmail} alt="Email" />
              <TextInfo>reportforrepair@gmail.com</TextInfo>
            </ContainerSocial>
            <ContainerSocial>
              <Icon src={IconPhone} alt="Phone" />
              <TextInfo>919999999</TextInfo>
            </ContainerSocial>
            <ContainerSocial>
              <Icon src={IconLocation} alt="Location" />
              <TextInfo>Tv. Silva Pinheiro, 4454-503 Matosinhos</TextInfo>
            </ContainerSocial>
            <ContainerSocial>
              <ButtonTop onClick={scrollTop}>
                <Icon src={IconArrow} alt="Arrow" />
              </ButtonTop>
            </ContainerSocial>
          </ContainerInfo>
        </Container>
      </>
    );
  };
  
  export default Footer;
  