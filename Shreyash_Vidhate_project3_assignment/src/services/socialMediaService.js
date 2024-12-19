// src/services/socialMediaService.js
import axios from "axios";

const getTwitterData = async (apiKey) => {
  try {
    const response = await axios.get("https://api.twitter.com/2/users", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Twitter data:", error);
    throw error;
  }
};

export { getTwitterData };
