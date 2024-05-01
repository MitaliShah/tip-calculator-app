import logo from "../../public/images/logo.svg";
import styled from "styled-components";

export default function Header() {
  return <LOGO src={logo} alt="logo" />;
}

const LOGO = styled.img`
  margin: 0 auto;
`;
