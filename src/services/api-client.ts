import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "08698a1465cc407ab41d382225f71b2d",
  },
});
