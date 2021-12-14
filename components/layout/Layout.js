import Navbar from "./Navbar";
import styled from "styled-components";

const Main = styled.main`
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
`;

function Layout(props) {
  return (
    <div>
      <Navbar />
      <Main>{props.children}</Main>
    </div>
  );
}

export default Layout;
