//api direct import from env no need create variable

import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  headers: {
    "x-rapidapi-key": process.env.React_App_Youtube_Key,
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
