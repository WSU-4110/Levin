import axios from "axios";

export default axios.create({
  baseURL:
    "http://levinbackend-env.eba-girxcq9y.us-east-1.elasticbeanstalk.com/levin/",
});
