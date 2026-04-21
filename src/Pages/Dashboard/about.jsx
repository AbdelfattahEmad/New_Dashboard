import React, { useState } from "react";
import Table from "../../Components/Tabel";
import Modal from "../../Components/Ui/Modal/Modal";
import CreateProduct from "../../Components/UiProducts/CreateProduct";


const About = () => {
    const [open, setOpen] = useState(false);

  return (
    <>
      <div className="AddproductModal">
          <h2> Add Products</h2>
      <button className="modal_open_button" onClick={() => setOpen(true)}>Add Product</button>
        <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Create Product"
       >
        <CreateProduct  />
      </Modal>


        
      </div>
      
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
    </>
  );
};

export default About;
