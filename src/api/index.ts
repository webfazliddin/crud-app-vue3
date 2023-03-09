import axios from "axios";

const client = axios.create({
  baseURL: "http://94.158.54.194:9092",
});

client.interceptors.request.use(function (config) {
  config.headers["Content-Type"] = "application/json";
  config.headers.Authorization =
    localStorage.getItem("productAppToken") || undefined;

  return config;
});

export default client;
