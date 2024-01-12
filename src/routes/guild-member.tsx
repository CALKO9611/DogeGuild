import { useState, useEffect } from "react";
import axios from "axios";

export default function GuildMember() {
  const [membersInfo, setMembersInfo] = useState([]);

  useEffect(() => {
    const fetchMembersInfo = async () => {
      try {
        const response = await axios.get("http://localhost:5174/guild-member"); // 새로운 endpoint로 변경
        setMembersInfo(response.data);
      } catch (error) {
        console.error("Failed to fetch member info:", error);
      }
    };

    fetchMembersInfo();
  }, []);

  return (
    <div>
      <h1>길드원 페이지입니다.</h1>
      {membersInfo.map((memberInfo, index) => (
        <div key={index}>
          <h1>주민등록상의 이름: {memberInfo.name}</h1>
          <p>용사의 이름: {memberInfo.nickname}</p>
          <p>용사의 레벨: {memberInfo.level}</p>
          <p>용사의 직업: {memberInfo.job}</p>
          <img
            src={memberInfo.characterImageUrl}
            alt={`${memberInfo.name}의 캐릭터 이미지`}
          />
        </div>
      ))}
    </div>
  );
}
