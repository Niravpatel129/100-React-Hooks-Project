import axios from "axios";

const fetchUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );

  return response;
};

const getData = () => {
  return function(dispatch) {
    fetchUsers().then(data => {
      dispatch({ type: "GET_DATA", payload: data.data });
    });
  };
};

export default { getData };
