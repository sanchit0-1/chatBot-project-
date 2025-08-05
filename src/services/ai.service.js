const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

async function generator(contentss) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contentss,
  });
}

module.exports = generator;