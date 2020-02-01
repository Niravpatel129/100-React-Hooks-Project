import Axios from "axios";

const GetData = () => {
  return dispatch => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      dispatch({ type: "GET_DATA", payload: res.data });
    });
  };
};

export { GetData };
