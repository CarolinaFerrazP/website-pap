import {
    Container,
    ContainerHome,
    LinkHome,
    ContainerLinks,
    Links,
    ButtonContact,
  } from "./styles";
  
  const Header = () => {
    var scrollBack = function () {
      window.scrollTo(4000, 4000);
    };
  
    return (
      <>
        <Container>
          <ContainerHome>
            <LinkHome title="Home" to="/">
              Report for Repair
            </LinkHome>
          </ContainerHome>
          <ContainerLinks>
            <Links to="/">Report</Links>
            <ButtonContact onClick={scrollBack}>
              <Links to="/">Contact</Links>
            </ButtonContact>
          </ContainerLinks>
        </Container>
      </>
    );
  };
  
  export default Header;