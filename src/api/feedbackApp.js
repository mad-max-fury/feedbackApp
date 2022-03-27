import axios from "axios";

export default axios.create({
  withCredentials: true,
  baseURL: "http://feedback-api-mad.herokuapp.com/api/v1",
});
