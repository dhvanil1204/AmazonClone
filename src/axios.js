import axios from "axios";

const instance = axios.create({
  // The API (cloud function) URL
  baseURL: "https://us-central1-challenge-efe31.cloudfunctions.net/api",
  //"http://localhost:5001/challenge-efe31/us-central1/api",
});

export default instance;
