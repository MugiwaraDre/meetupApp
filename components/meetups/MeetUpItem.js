import styled from "styled-components";
import { useRouter } from "next/router";

import Card from "../ui/Card";

const Wrapper = styled.li`
  margin: 1rem 0;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 20rem;
  overflow: hidden;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
`;

const MyImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  text-align: center;
  padding: 1rem;

  h3 {
    font-size: 1.5rem;
    color: #2c292b;
  }
`;

const Actions = styled.div`
  padding: 1.5rem;
  text-align: center;

  button {
    font: inherit;
    cursor: pointer;
    color: #77002e;
    border: 1px solid #77002e;
    background-color: transparent;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
  }

  button:hover,
  button:active {
    background-color: #ffe2ed;
  }
`;

function MeetUpItem(props) {
  //  54-57, construct next/link is the better, but this is how programmatic navigation could be done
  const router = useRouter();
  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <Wrapper>
      <Card>
        <ImageContainer>
          <MyImg src={props.image} alt={props.title} />
        </ImageContainer>
        <Content>
          <h3 className={props.title}>{props.title}</h3>
          <address>{props.address}</address>
        </Content>
        <Actions>
          <button onClick={showDetailsHandler}>Show Details</button>
        </Actions>
      </Card>
    </Wrapper>
  );
}

export default MeetUpItem;
