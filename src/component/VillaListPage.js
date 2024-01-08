// VillaListPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, Link, useHistory } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarUser } from './navbar';


import EditVillaPage from './EditVillaPage';  // Import the EditVillaPage component


const VillaListPage = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const successParam = queryParams.get('success');


  //

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedVillaId, setSelectedVillaId] = useState(null);



  useEffect(() => {
    getData();
    if (successParam === 'true') {
      // toast.success('Success');

    }
  }, [successParam]);

  const getData = () => {
    axios.get('http://localhost:5211/api/Villas')
      .then((result) => {
        setData(result.data)
      })
      .catch((error) => {
        console.log(error)
      });
  }
  // const handleDelete = async (id) => {
  //   if (window.confirm("Are you sure to delete this Villa") === true) {
  //     try {
  //       await axios.delete(`http://localhost:5211/api/Villas/${id}`);
  //       toast.success("Villa has been deleted");
  //       await getData(); // Wait for data to be updated
  //     } catch (error) {
  //       toast.error(error.message);
  //     }
  //   }
  // };
  const handleDelete = async (id) => {
    setShowDeleteModal(true);
    setSelectedVillaId(id);
  };

  const confirmDelete = async () => {
    setShowDeleteModal(false);
    if (selectedVillaId) {
      try {
        await axios.delete(`http://localhost:5211/api/Villas/${selectedVillaId}`);
        toast.success("Villa has been deleted");
        await getData(); // Wait for data to be updated
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedVillaId(null);
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <a class="navbar-brand" href="/home"><img src="./images/resort.png" alt="#" style={{ width: "35px" }} /></a>

              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="/admin">Home</a>
              </li>


            </ul>
            <form className="d-flex">
              {/* <h5 className="text-primary">{username}   </h5> */}
              <a className="nav-link active text-light" aria-current="page" href="" style={{ marginRight: '10px', padding: '10px', fontSize: '20px' }}>Admin</a>
              <a className="btn btn-outline-danger" href="/login" style={{ padding: '10px' }}>Logout</a>
            </form>
          </div>
        </div>
      </nav>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 w-100">
        <ToastContainer></ToastContainer>
        <div className="w-100 card border-0 p-4">
          <div className="card-header bg-success bg-gradient ml-0 py-3">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="text-white py-2">Villa List</h2>
              </div>
            </div>
          </div>
          <div className="card-body border p-4">
            <div className="row pb-3">
              <div className="col-6 offset-6 text-end">
                <Link to="/create-villa" className="btn btn-success">
                  <i className="bi bi-plus-circle"></i> Create New Villa
                </Link>
              </div>
            </div>
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th> {/* Added description field */}
                  <th>Price</th>
                  <th>Sqft</th>
                  <th>Occupancy</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  data && data.length > 0 ?
                    data.map((item, id) => {
                      return (
                        <tr key={id}>
                          <td>{item.name}</td>
                          <td>{item.description}</td>
                          <td>{item.price}</td>
                          <td>{item.sqft}</td>
                          <td>{item.occupancy}</td>
                          <td>
                            {/* Link to the EditVillaPage with the villa ID */}
                            <Link to={`/edit-villa/${item.id}`} className="btn btn-primary">Edit</Link> &nbsp;
                            <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                          </td>
                        </tr>
                      )
                    })
                    :
                    'Loading.....'
                }
              </tbody>
            </table>
          </div>
        </div>
        <Modal show={showDeleteModal} onHide={cancelDelete}>
          <Modal.Header closeButton className="bg-success text-white">
            <Modal.Title>Delete Villa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure to delete this Villa?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cancelDelete}>
              Cancel
            </Button>
            <Button variant="danger" onClick={confirmDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default VillaListPage;
