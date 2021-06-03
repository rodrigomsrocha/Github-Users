import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/",
  headers: { Authorization: "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" },
});

export default api;
