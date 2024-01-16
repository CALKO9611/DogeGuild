import styled from "styled-components";

interface CharacterBoxProps {
  memberInfo: {
    name: string;
    nickname: string;
    level: string;
    job: string;
    characterImageUrl: string;
  };
  index: number;
}

const CharacterBoxContainer = styled.div`
  display: flex;
  border: 1px solid;
  align-items: center;
  justify-content: center;
`;

export default function CharacterBox({ memberInfo, index }: CharacterBoxProps) {
  return (
    <CharacterBoxContainer>
      <img
        src={memberInfo.characterImageUrl}
        alt={`${memberInfo.name}의 캐릭터 이미지`}
      />
      <div>
        <p>{memberInfo.name}</p>
        {index === 0 && <p>길드마스터</p>}
        <p>{memberInfo.nickname}</p>
        <p>{memberInfo.level}</p>
        <p>{memberInfo.job}</p>
      </div>
    </CharacterBoxContainer>
  );
}
