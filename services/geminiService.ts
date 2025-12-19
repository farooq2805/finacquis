
import { GoogleGenAI } from "@google/genai";

// Always initialize GoogleGenAI with a direct reference to process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAdvisorResponse = async (userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userInput,
      config: {
        systemInstruction: `You are a high-end M&A (Mergers and Acquisitions) Consultant specifically for technology founders. 
        Your tone is professional, strategic, discreet, and highly analytical. 
        Focus on exit readiness, valuation metrics, due diligence preparation, and strategic buyer matching.
        Address pain points like cap table management, EBITDA vs Revenue multiples, and deal fatigue.
        Keep responses concise but value-packed. Use markdown formatting for readability.`,
        temperature: 0.7,
      }
    });
    // Correctly accessing the text property from GenerateContentResponse
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm currently analyzing several high-profile deals. Could you try again in a moment?";
  }
};
