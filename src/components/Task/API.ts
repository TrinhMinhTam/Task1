import axios from "axios";
import { TaskType } from "../Data";

const API_URL = "http://nmt.logit.id.vn:5005/api/v1";

export const getAllTasks = (url: string, callback: (data: any) => void) => {
  const api = `${API_URL}/${url}`;
  axios
    .get(api)
    .then((response) => {
      callback(response);
    })
    .catch((error) => {
      console.error("Error fetching tasks:", error);
    });
};

export const putTask = (
  url: string,
  data: any,
  callback: (data: any) => void
) => {
  const api = `${API_URL}/${url}`;
  return axios
    .put(api, data)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.error("Error putting task:", error);
      throw error;
    });
};
export const delTask = (
  url: string,

  callback: (data: any) => void
) => {
  const api = `${API_URL}/${url}`;
  axios
    .delete(api)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log("error putting task", err);
    });
};

export const addTask = (
  url: string,
  task: TaskType,
  callback: (data: any) => void
) => {
  const api = `${API_URL}/${url}`;
  axios
    .post(api, task)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log("error postting task", err);
    });
};
