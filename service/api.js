import axios from "axios";

const api = axios.create({
  baseURL: "http://api.todo.ootz.com.br",
  headers: {
    apiKey: "38476616AB64ACDCAC9D2835A50C2B7074DE956BA107B7F7885D64E1F26DFDE1"
  }
});

export default api;
