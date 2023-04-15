import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    // it is optional
    apiKey: 1,
  },
});

export { CanceledError };
