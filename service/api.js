import axios from "axios";

const api = axios.create({
  baseURL: "http://api.todo.ootz.com.br",
  headers: {
    apiKey: ""
  }
});

export default api;
