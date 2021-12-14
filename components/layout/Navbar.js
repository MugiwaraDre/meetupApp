import styled from "styled-components";
import Link from "next/link";

const Header = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #77002e;
  padding: 0 10%;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: baseline;
  }

  li {
    margin-left: 3rem;
  }
  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: #fcb8d2;
  }

  a:hover,
  a:active,
  a.active {
    color: white;
  }
`;
const Logo = styled.div`
  font-size: 2rem;
  color: white;
  font-weight: bold;
`;

function Navbar() {
  return (
    <Header>
      <Logo>Meetups</Logo>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meetups</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add new Meetup</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
}

export default Navbar;
