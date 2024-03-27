import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 3.8125rem;
  padding-left: 0.625rem;
  gap: 30px;
  /* background-color: #ffb700; */
  background-color: #b9a032;

  img {
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    // 추후 메뉴 아이템 사라지고 햄버거 바 생성
    background-color: pink;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 30px;
`;

export default function Header() {
  const linkStyle = { textDecoration: "none", color: "black" };
  return (
    <StyledHeader>
      <Link to="/">
        <img
          width="55px"
          height="55px"
          src="/public/DogeLogo.png"
          alt="Doge 로고 이미지"
        />
      </Link>

      <StyledNav>
        <Link to="/" style={linkStyle}>
          홈
        </Link>
        <Link to="/guild-member" style={linkStyle}>
          길드원
        </Link>
        <Link to="/developer" style={linkStyle}>
          개발자
        </Link>
      </StyledNav>
    </StyledHeader>
  );
}
