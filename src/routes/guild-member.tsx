import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterBox from "../components/characterBox";

const Wrapper = styled.div`
  /* background-color: yellow; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-rows: repeat(5, minmax(100px, auto)); */
  margin: 0px 3.125rem;
  gap: 0.625rem;
  /* grid-gap: 20px; */
`;

export default function GuildMember() {
  const [isLoading, setLoading] = useState(true);
  const [membersInfo, setMembersInfo] = useState([]);

  useEffect(() => {
    const fetchMembersInfo = async () => {
      try {
        const response = await axios.get("http://localhost:5174/guild-member"); // server.js 포트번호
        setLoading(false);
        setMembersInfo(response.data);
      } catch (error) {
        console.error("Failed to fetch member info:", error);
        setLoading(false);
      }
    };

    fetchMembersInfo();
  }, []);

  return (
    <Wrapper>
      {/* <h1>길드원 페이지입니다.</h1> */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        membersInfo.map((memberInfo, index) => (
          <CharacterBox key={index} index={index} memberInfo={memberInfo} />
        ))
      )}
    </Wrapper>
  );
}
