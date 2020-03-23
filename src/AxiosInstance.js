import Axios from "axios";

let instance = Axios.create({
  baseURL: "https://fightagainstcoronapakistan.firebaseio.com"
});
export default instance;
