import axios from "axios";
const baseUrl = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    q: "desp",
    hl: "en",
    gl: "US",
  },
  headers: {
    "x-rapidapi-key": process.env.React_App_Youtube_Key,
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

const fetchDatafromApi = async (url) => {
  const data = await axios.get(`${baseUrl}/${url}`, options);
  return data;
};

export default fetchDatafromApi;
// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
