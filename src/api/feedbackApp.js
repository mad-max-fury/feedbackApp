import axios from "axios";

export default axios.create({
  baseURL: "https://feedback-api-mad.herokuapp.com/api/v1",
});
