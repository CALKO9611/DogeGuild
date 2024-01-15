import { useState, useEffect } from "react";
import axios from "axios";

interface MemberInfo {
  name: string;
  nickname: string;
  level: string;
  job: string;
  characterImageUrl: string;
}

export default function GuildMember() {
  const [membersInfo, setMembersInfo] = useState<MemberInfo[]>([]);

  useEffect(() => {
    const fetchMembersInfo = async () => {
      try {
        const response = await axios.get<MemberInfo[]>(
          "http://localhost:5174/guild-member"
        ); // 새로운 endpoint로 변경
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
          <img
            src={memberInfo.characterImageUrl}
            alt={`${memberInfo.name}의 캐릭터 이미지`}
          />
          <h1>이름: {memberInfo.name}</h1>
          <p>닉네임: {memberInfo.nickname}</p>
          <p>레벨: {memberInfo.level}</p>
          <p>직업: {memberInfo.job}</p>
        </div>
      ))}
    </div>
  );
}
