import axios, { CanceledError } from "axios";

// axios.create() is a method provided by the Axios library that allows you to
// create a new instance of the Axios client with customized defaults.

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  // headers: {
  //   // it is optional
  //   // apiKey: 1,
  // },
});

export { CanceledError };
