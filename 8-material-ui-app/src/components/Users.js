import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, updateUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("https://reqres.in/api/users");
    updateUsers(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return <div></div>;
}

export default Users;
