import axios from "axios";

export const baseURL =
  "https://contextualwebsearch-websearch-v1.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      "x-rapidapi-key": "205eb112a4mshb5918214467d1abp10494bjsn73b8564dd949",
    },
  });
  return data;
};
