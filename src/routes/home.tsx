import styled from "styled-components";

const Wrapper = styled.div`
  background-color: red;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <Wrapper>
      {/* <Banner /> */}
      <h2>home</h2>
    </Wrapper>
  );
}
