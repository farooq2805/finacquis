
import { GoogleGenAI } from "@google/genai";

// Ensure process.env exists even if polyfill somehow failed
const getApiKey = () => {
  try {
    return (window as any).process?.env?.API_KEY || '';
  } catch (e) {
    return '';
  }
};

export const getAdvisorResponse = async (userInput: string) => {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    console.warn("Gemini AI API Key not found in process.env.API_KEY");
    return "Advisory Engine simulated: To enable real-time institutional intelligence, please provide a valid API key in the environment configuration.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
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
    return "Our systems are currently prioritizing high-volume deal flow analysis. Please re-submit your query in a few moments.";
  }
};
