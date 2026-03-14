import React from "react";
import Table from "../../Components/Tabel";

const About = () => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role1</th>
            <th>Role2</th>
            <th>Role3</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Ahmed</td>
            <td>ahmed@mail.com</td>
            <td>Admin</td>
            <td>Admin1</td>
            <td>Admin2</td>
          </tr>

          <tr>
            <td>Ahmed</td>
            <td>ahmed@mail.com</td>
            <td>Admin</td>
            <td>Admin1</td>
            <td>Admin2</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default About;
