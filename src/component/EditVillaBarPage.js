import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const EditVillaBarPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // State for form inputs and errors
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const [nameError, setNameError] = useState('');
  const [priceError, setPriceError] = useState('');
  const[data,setData] = useState([]);

  // Fetch data for editing when component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:5211/api/VillaBarChart/${id}`)
      .then((result) => {
        const { name, description, price, sqft, occupancy } = result.data;
        setName(name);
        setPrice(price);
      })
      .catch((error) => {
        console.log(error);
   
      })
  }, [id]);

  useEffect(() => {
    getData();
}, [])
 
const getData = () =>
{
    axios.get(`http://localhost:5211/api/VillaBarChart`)
    .then((result)=>{
        setData(result.data)
       //toast.success('Edit Done')
       
    })
    .catch((error)=>{
        console.log(error)
    })
}

  // Function to validate form inputs
  const validateInputs = () => {
    let isValid = true;

    // Reset all error messages
    setNameError('');
    setPriceError('');

    // Validation logic for each input field
    if (name.trim().length === 0) {
      setNameError('Name is required');
      isValid = false;
    } else if (name.length > 50) {
      setNameError('Name should not exceed 50 characters');
      isValid = false;
    }


    if (isNaN(price) || price < 1000 || price > 10000) {
      setPriceError('Price per night must be a number between 1000 and 10000');
      isValid = false;
    }

    return isValid;
  };

  // Function to handle form submission
  const handleSave = () => {
    // Validate form inputs
    const isValid = validateInputs();

    if (isValid) {
      // If validation passes, proceed with saving data
      const url = `http://localhost:5211/api/VillaBarChart/${id}`;
      const data = {
        id,
        name,
        price,
      };

      axios
        .put(url, data)
        .then(() => {
          // Redirect to VillaListPage with a success parameter
          navigate('/manageBookings?success=true');
          toast.success('Edit Done')
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // Function to handle navigation back to the list
  const handleBackToList = () => {
    navigate('/manageBookings');
  };

  return (
    <div className="w-100 card border-0 p-4">
      <div className="card-header bg-success bg-gradient ml-0 py-3">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-white py-2">Edit Villa</h2>
          </div>
        </div>
      </div>
      <div className="card-body border p-4">
        <form method="post" className="row" encType="multipart/form-data" noValidate="novalidate">
          <div className="p-3">
            {/* Name Input */}
            <div className="form-floating py-1 col-12">
              <input
                onChange={(e) => setName(e.target.value)}
                className={`form-control border shadow ${nameError ? 'is-invalid' : ''}`}
                type="text"
                value={name}
              />
              <label className="ms-2" htmlFor="Name">
                Name
              </label>
              <span className="text-danger field-validation-valid">{nameError}</span>
            </div>

            {/* Price Input */}
            <div className="form-floating py-1 col-12">
              <input
                onChange={(e) => setPrice(e.target.value)}
                className={`form-control border shadow ${priceError ? 'is-invalid' : ''}`}
                type="text"
                value={price}
              />
              <label className="ms-2" htmlFor="Price">
                Price per night
              </label>
              <span className="text-danger field-validation-valid">{priceError}</span>
            </div>
          </div>
        </form>

        {/* Render buttons for save and back to list */}
        <div className="row pt-2">
          <div className="col-6 col-md-3">
            <button
              type="button"
              className="btn btn-dark mx-2"
              style={{ width: '150px' }}
              onClick={handleSave}
            >
              Save
            </button>
          </div>
          <div className="col-6 col-md-3">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleBackToList}
            >
              Back To List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditVillaBarPage;
