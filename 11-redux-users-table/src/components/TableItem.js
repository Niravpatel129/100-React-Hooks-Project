import React from "react";

function TableItem({ user }) {
  const { id, name, email, address, phone } = user;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{address.street}</td>
      <td>{phone}</td>
    </tr>
  );
}

export default TableItem;
