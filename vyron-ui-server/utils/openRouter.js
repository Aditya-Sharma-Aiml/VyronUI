import axios from "axios";

export const askAI = async (messages) => {
  try {
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      throw new Error("Messages array is empty.");
    }

    console.log("Calling OpenRouter with model: openai/gpt-4o-mini");

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages: messages,
        temperature: 0.7,
        max_tokens: 4000,
        response_format: { type: "json_object" }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5173",
          "X-Title": "VyronUI Component Generator"
        }
      }
    );

    const content = response?.data?.choices?.[0]?.message?.content;

    if (!content || !content.trim()) {
      throw new Error("AI returned empty response.");
    }

    return content;

  } catch (error) {
    if (error.response) {
      console.error("OpenRouter Error Data:", JSON.stringify(error.response.data, null, 2));
    } else {
      console.error("OpenRouter Error Message:", error.message);
    }
    throw new Error("OpenRouter API Error");
  }
};
