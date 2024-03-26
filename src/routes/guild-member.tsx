import { useState, useEffect } from "react";
import member from "../../config/members.json";
import styled from "styled-components";
import CharacterBox from "../components/characterBox";

interface CharacterData {
  character_name: string;
  character_level: number;
  character_class: string;
  character_image: string;
  // world_name: string;
  // character_gender: string;
  // character_class_level: number;
}

const Wrapper = styled.div`
  /* background-color: yellow; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, minmax(100px, auto));
  margin: 3.125rem;
  gap: 0.625rem;
  grid-gap: 20px;
`;

export default function GuildMember() {
  const [responseData, setResponseData] = useState<CharacterData[] | null>(
    null
  );
  const API_KEY = import.meta.env.VITE_MAPLESTORY_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = new Headers({
          "x-nxopen-api-key": API_KEY || "",
        });
        const today = new Date();
        today.setDate(today.getDate() - 1); // 하루 전 날짜로 설정
        const formattedDate = `${today.getFullYear()}-${(
          "0" +
          (today.getMonth() + 1)
        ).slice(-2)}-${("0" + today.getDate()).slice(-2)}`;
        console.log(formattedDate);

        const urls = Object.values(member).map((ocid) => {
          return `https://open.api.nexon.com/maplestory/v1/character/basic?ocid=${ocid}&date=${formattedDate}`;
        });

        // 모든 URL에 대해 각각 fetch를 수행합니다.
        const responses = await Promise.all(
          urls.map((url) => fetch(url, { headers }))
        );

        const datas: CharacterData[] = await Promise.all(
          responses.map((response) => response.json())
        );
        setResponseData(datas);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [API_KEY]);

  return (
    <Wrapper>
      {responseData &&
        responseData.map((data: CharacterData, index: number) => (
          <CharacterBox key={index} memberInfo={data} />
        ))}
      {!responseData && <p>Loading...</p>}
    </Wrapper>
  );
}
