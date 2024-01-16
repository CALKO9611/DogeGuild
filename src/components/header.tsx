import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 3.8125rem;
  padding-left: 0.625rem;
  gap: 30px;
  background-color: #ffb700;

  h1,
  img {
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    // 추후 메뉴 아이템 사라지고 햄버거 바 생성
    background-color: pink;
  }
`;

export default function Header() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <StyledHeader>
      <img
        width="70px"
        height="61px"
        src="/public/kodakLogo.svg"
        alt="Kodak 로고 이미지"
        onClick={() => handleNavigation("/")}
      />
      <h1 onClick={() => handleNavigation("/")}>홈</h1>
      <h1 onClick={() => handleNavigation("/guild-member")}>길드원</h1>
      <h1 onClick={() => handleNavigation("/developer")}>개발자</h1>
    </StyledHeader>
  );
}
