
import { GoogleGenAI } from "@google/genai";

// Ensure process.env exists for the SDK even in browser environments
const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : '';

// Initialize only if API key is available to avoid constructor errors
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getAdvisorResponse = async (userInput: string) => {
  if (!ai) {
    console.error("Gemini AI not initialized. Missing API Key.");
    return "The advisory engine is currently offline for scheduled maintenance. Please check back shortly.";
  }

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
    
    return response.text || "I've analyzed your request but couldn't generate a strategic brief at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm currently analyzing several high-profile deals. Could you try again in a moment?";
  }
};
