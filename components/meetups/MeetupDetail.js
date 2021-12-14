import styled from "styled-components";

const Section = styled.section`
  text-align: center;

  img {
    width: 100%;
  }
`;

function MeetupDetail(props) {
  return (
    <Section>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </Section>
  );
}

export default MeetupDetail;
