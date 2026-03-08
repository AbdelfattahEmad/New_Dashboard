import React from "react";
import Table from "../../Components/Tabel";

const DasboardHome = () => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Ahmed</td>
            <td>ahmed@mail.com</td>
            <td>Admin</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DasboardHome;
