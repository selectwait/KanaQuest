import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateVocabularyExample(kana: string, romaji: string): Promise<{ word: string, reading: string, meaning: string, sentence: string }> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a simple, common Japanese word that starts with (or contains) the hiragana character "${kana}" (${romaji}).
      Provide the word in Kanji/Hiragana, its reading in Hiragana, its English meaning, and a very short simple sentence using it.
      Return strictly valid JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            word: { type: Type.STRING, description: "The Japanese word" },
            reading: { type: Type.STRING, description: "The reading in Hiragana" },
            meaning: { type: Type.STRING, description: "English meaning" },
            sentence: { type: Type.STRING, description: "A simple example sentence" }
          },
          required: ["word", "reading", "meaning", "sentence"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text);
    }
    throw new Error("No response text");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      word: "Error",
      reading: "Error",
      meaning: "Could not generate example.",
      sentence: "Please check your API key."
    };
  }
}
