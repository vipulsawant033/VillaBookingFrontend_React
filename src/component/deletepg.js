import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const DeleteVillaPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(true);
  const [villaName, setVillaName] = useState('Villa');
  
  const handleClose = () => {
    setShowModal(false);
    navigate('/VillaListPage'); // Redirect to VillaListPage if the user closes the modal without deleting
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5211/api/Villas/${id}`);
      // Redirect to VillaListPage after successful deletion
      navigate('/VillaListPage?success=true');
    } catch (error) {
      console.error('Error deleting villa:', error);
    }
  };

  useEffect(() => {
    // Fetch the villa information when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5211/api/Villas/${id}`);
        setVillaName(response.data.name); // Assuming there's a 'name' property in the villa data
      } catch (error) {
        console.error('Error fetching villa details:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="w-100 card border-0 p-4">
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Villa - {villaName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="lead">Are you sure you want to delete this villa?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteVillaPage;
