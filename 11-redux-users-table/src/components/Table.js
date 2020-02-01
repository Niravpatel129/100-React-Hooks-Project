import React from "react";
import TableItem from "./TableItem";

function Table({ users }) {
  return (
    <div>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return <TableItem key={index} user={user} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
