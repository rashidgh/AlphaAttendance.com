import axios from "axios";

let Axiosnstance = axios.create({
  baseURL: "http://106.51.76.167:8080",
  headers: {
    "Content-type": "application/json",
  },
});

export default Axiosnstance;
