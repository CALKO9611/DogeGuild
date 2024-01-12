// GuildMember.tsx

import { useState, useEffect } from "react";
import axios from "axios";

export default function GuildMember() {
  const [memberInfo, setMemberInfo] = useState({
    nickname: "",
    level: "",
    job: "",
    characterImageUrl: "",
  });

  useEffect(() => {
    const fetchMemberInfo = async () => {
      try {
        const response = await axios.get("http://localhost:5174/guild-member");
        const data = response.data;

        setMemberInfo({
          nickname: data.nickname,
          level: data.level,
          job: data.job,
          characterImageUrl: data.characterImageUrl,
        });
      } catch (error) {
        console.error("Failed to fetch member info:", error);
      }
    };

    fetchMemberInfo();
  }, []);

  return (
    <div>
      <h1>길드원 페이지입니다.</h1>
      <p>용사의 이름: {memberInfo.nickname}</p>
      <p>용사의 레벨: {memberInfo.level}</p>
      <p>용사의 직업: {memberInfo.job}</p>
      <img src={memberInfo.characterImageUrl} alt="캐릭터 이미지" />
    </div>
  );
}
