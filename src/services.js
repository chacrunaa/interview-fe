import axios from "axios";

const backendUrl = "https://interview-test.ru/api";

const createPost = async (postData) => {
  try {
    const response = await axios.post(backendUrl, postData);

    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

export { createPost };
