import logo from "../../public/images/logo.svg";
import styled from "styled-components";

export default function Header() {
  return(
    <>
    <h1 className="visually-hidden">Spliter</h1>
      <LOGO src={logo} alt="logo" />
    </>
  );
}

const LOGO = styled.img`
  margin: 0 auto;
`;
