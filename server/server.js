import express from "express";
import axios from "axios";
import cheerio from "cheerio";
import cors from "cors";
import fs from "fs"; // fs 모듈을 사용하기 위해 import

const app = express();
const port = 5174;

app.use(cors());

app.get("/guild-member", async (req, res) => {
  try {
    // users.json 파일에서 데이터 읽기
    const rawData = fs.readFileSync("./config/users.json", "utf-8");
    const membersData = JSON.parse(rawData);

    const membersInfo = [];

    // users.json에서 각 사용자의 데이터를 가져와서 membersInfo 배열에 추가
    for (const [name, nickname] of Object.entries(membersData)) {
      const targetUrl = `https://maple.gg/u/${nickname}`;
      const response = await axios.get(targetUrl);
      const $ = cheerio.load(response.data);

      const memberInfo = {
        name: name,
        nickname: $(".nickname").text().trim(),
        level: $(".level").text().trim(),
        job: $(".job").text().trim(),
        characterImageUrl: $(".character-image").attr("src"),
      };

      membersInfo.push(memberInfo);
    }

    res.json(membersInfo); // JSON 형태로 클라이언트에 응답
  } catch (error) {
    console.error("Error occurred while processing request:", error); // 에러를 더 자세히 로깅
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/guild-member`);
});
