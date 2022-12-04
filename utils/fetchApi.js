import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': 'c9675f655amsh5475a60c07da068p13c496jsn26019541227b',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
  });

  return data;
}