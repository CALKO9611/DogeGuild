import styled from "styled-components";

interface CharacterBoxProps {
  memberInfo: {
    character_name: string;
    character_level: number;
    character_class: string;
    character_image: string;
  };
}

const CharacterBoxContainer = styled.div`
  display: flex;
  border: 1px solid;
  align-items: center;
  justify-content: center;
`;

export default function CharacterBox({ memberInfo }: CharacterBoxProps) {
  return (
    <CharacterBoxContainer>
      <img
        src={memberInfo.character_image}
        alt={`${memberInfo.character_name}의 캐릭터 이미지`}
      />
      <div>
        <p>{memberInfo.character_name}</p>
        <p>{memberInfo.character_level}</p>
        <p>{memberInfo.character_class}</p>
      </div>
    </CharacterBoxContainer>
  );
}
