import axios from "axios";

export default axios.create({
  baseURL: "http://feedback-api-mad.herokuapp.com/api/v1",
});
