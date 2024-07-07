import axsio from "axios";
import { toast } from "react-toastify";

const axiosApiInstance = axsio.create({
  baseURL: "https://fakestoreapi.com",
});

axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const redirectServerError: string = process.env.REACT_APP_SERVER_ERROR_REDIRECT as string;

    const expectedErrors = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedErrors) {
      toast.error("An unexpected error occurrred.");

      if (window.location.pathname !== redirectServerError) {
        throw new Error("there is a error from server");
      }
    } else {
      if (error.response.status === 400) {
        toast.error("Bad Request - The request could not be understood by the server");
      } else if (error.response.status === 401) {
        toast.error("Unauthorized - The request requires user authentication");
      } else if (error.response.status === 403) {
        toast.error("Forbidden - The server understood the request, but is refusing to fulfill it.");
      } else if (error.response.status === 404) {
        toast.error("Not Found - The requested resource could not be found.");
      } else if (error.response.status === 429) {
        toast.error("Too Many Requests");
      } else {
        toast.error(error.message);
      }
    }

    return Promise.reject(error);
  }
);

export default {
  get: axiosApiInstance.get,
  post: axiosApiInstance.post,
  put: axiosApiInstance.put,
  delete: axiosApiInstance.delete,
};
