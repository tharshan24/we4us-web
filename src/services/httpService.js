import axios from "axios";

const instance = axios.create({
  proxy: true,
});

instance.interceptors.request.use((request) => {
  request.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;

  return request;
});

export default {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};
