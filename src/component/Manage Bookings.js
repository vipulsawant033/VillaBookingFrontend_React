import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, Link, useHistory } from 'react-router-dom';
import { NavbarUser } from './navbar';

import EditVillaPage from './EditVillaPage';  // Import the EditVillaPage component


const Manage = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const successParam = queryParams.get('success');


 

  useEffect(() => {
    getData();
    if (successParam === 'true') {
      // toast.success('Success');

    }

  }, [successParam]);

  const getData = () => {
    axios.get('http://localhost:5211/api/VillaBarChart')
      .then((result) => {
        setData(result.data)
      })
      .catch((error) => {
        console.log(error)
      });
  }
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this Villa") === true) {
      try {
        await axios.delete(`http://localhost:5211/api/VillaBarChart/${id}`);
        toast.success("Villa has been deleted");
        await getData(); // Wait for data to be updated
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  
  return (
    <>
    <NavbarUser></NavbarUser>
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
                <Link to="/create-villa-bar" className="btn btn-primary">
                  <i className="bi bi-plus-circle"></i> Create New Villa
                </Link>
              </div>
            </div>
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
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
                          <td>{item.price}</td>
                          <td>
                            {/* Link to the EditVillaPage with the villa ID */}
                            <Link to={`/edit-villa-bar/${item.id}`} className="btn btn-primary">Edit</Link> &nbsp;
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
      </div>

    </>
  );
};

export default Manage;
