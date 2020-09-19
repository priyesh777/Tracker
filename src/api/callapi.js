import Axios from "axios";

export const PostApi = (url, formdata) => {
  return Axios.post(url, formdata)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
};

export const AuthPostApi = (url, formdata) => {
  const token = localStorage.getItem("token");
  const headers = { Authorization: "Token " + token };
  return Axios.post(url, formdata, { headers })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
};

export const GetApi = url => {
  const token = localStorage.getItem("token");
  const headers = { Authorization: "Token " + token };
  return Axios.get(url, { headers })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

export const PatchApi = (url, data) => {
  const token = localStorage.getItem("token");
  const headers = { Authorization: "Token " + token };
  return Axios.patch(url, data, { headers })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
};

export const DeleteApi = (url, data) => {
  const token = localStorage.getItem("token");
  const headers = { Authorization: "Token " + token };
  return Axios.delete(url, data, { headers })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
};
