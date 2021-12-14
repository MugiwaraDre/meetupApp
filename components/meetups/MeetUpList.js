import styled from "styled-components";
import MeetUpItem from "./MeetUpItem";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

function MeetUpList(props) {
  return (
    <List>
      {props.meetups.map((meetup) => (
        <MeetUpItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </List>
  );
}
export default MeetUpList;
