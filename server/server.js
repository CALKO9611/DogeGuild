// server.js

import express from "express";
import axios from "axios";
import cheerio from "cheerio";
import cors from "cors";

const app = express();
const port = 5174;

app.use(cors()); // CORS 미들웨어 추가

app.get("/guild-member", async (req, res) => {
  try {
    const targetUrl = "https://maple.gg/u/스컹크왕자님";
    const response = await axios.get(targetUrl);
    const $ = cheerio.load(response.data);

    // 필요한 정보 추출
    const nickname = $(".nickname").text().trim();
    const level = $(".level").text().trim();
    const job = $(".job").text().trim();
    const characterImageUrl = $(".character-image").attr("src");

    res.json({
      nickname: nickname,
      level: level,
      job: job,
      characterImageUrl: characterImageUrl,
    });
    // res.json({ nickname: nicknameContent });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/guild-member`);
});
