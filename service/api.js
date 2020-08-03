import axios from "axios";

const api = axios.create({
  baseURL: "http://api.todo.ootz.com.br",
  headers: {
    apiKey: "___CHAVE___"
  }
});

export default api;
