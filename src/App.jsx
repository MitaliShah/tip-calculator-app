import Header from "./components/Header";
import GlobalStyles from "../src/GlobalStyles";
import styled from "styled-components";
import Form from "./components/Form";

function App() {
  return (
    <Main>
      <Header />
      <main>
        <Form />
      </main>
      <GlobalStyles />
    </Main>
  );
}

export default App;

const Main = styled.main`
  max-width: 23.438rem;
`;
