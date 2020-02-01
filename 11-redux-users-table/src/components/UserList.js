import React from "react";
import Table from "./Table";

function UserList({ users }) {
  return (
    <div style={{ marginTop: "50px" }}>
      <Table users={users} />
    </div>
  );
}

export default UserList;
