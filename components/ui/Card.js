import styled from "styled-components";
const Wrapper = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

function Card(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

export default Card;
