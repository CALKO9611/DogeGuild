import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 3.8125rem;
  padding-left: 0.625rem;
  gap: 30px;
  background-color: #ffb700;
  @media screen and (max-width: 500px) {
    background-color: pink;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <img width="70px" height="61px" src="/public/kodakLogo.svg" />
      {/* navigation 효과 입혀야 햡니다. */}
      <h1>홈</h1>
      <h1>길드원</h1>
      <h1>개발자</h1>
    </StyledHeader>
  );
}
