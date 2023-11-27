import axios from 'axios';

const baseURL = 'https://api.giphy.com/v1/gifs';

const apiKey = 'hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk'


export const http = axios.create({
  baseURL,
  params:{
    api_key: apiKey,
    limit: 15,
  }
});
