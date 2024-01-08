import { GiftFill } from 'react-bootstrap-icons';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// Import VillaDetails component
import { Modal, Button } from 'react-bootstrap';
import BookingForm from './BookingForm';

export const Carousel = () => {
    const [villas, setVillas] = useState([]);
    const [selectedVilla, setSelectedVilla] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    const currentDate = new Date().toISOString().split('T')[0];
    const [imageIndex, setImageIndex] = useState(0);
    const [showBookingModal, setShowBookingModal] = useState(false);

    const handleShowBookingModal = () => setShowBookingModal(true);
    const [selectedNights, setSelectedNights] = useState(1); // Default value is 1
    const [showBookingForm, setShowBookingForm] = useState(false);

    useEffect(() => {
        getData();
        toggleImage();
    }, []);

    const getData = () => {
        axios
            .get('http://localhost:5211/api/Villas')
            .then((result) => {
                setVillas(result.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

   
    const handleDetails = (villaId) => {
        const selectedVilla = villas.find((villa) => villa.id === villaId);
        setSelectedVilla(selectedVilla);
        handleShowModal();
    };

    const handleBook = (villaId) => {
        const selectedVilla = villas.find((villa) => villa.id === villaId);
        setSelectedVilla(selectedVilla);
        handleShowBookingModal();
    };

    const toggleImage = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming you have 3 images
    };

    const handleOpenBookingForm = () => {
        setShowBookingModal(false); // Close the booking modal if open
        setShowBookingForm(true); // Open the booking form
    };

    const handleCloseBookingForm = () => {
        setShowBookingForm(false);
        setShowBookingModal(false);
    };


    return (
        <>
            <div className="bg-dark text-white text-center py-4">
                <div className="container">
                    <div className="row p-0 mx-0">
                        <div className="col">
                            <GiftFill size={30} className="me-2" />
                            <GiftFill size={30} className="ms-2" />
                            <h2 className="d-inline">&nbsp;Special Offer 10% Off On All Villas&nbsp;</h2>
                            <GiftFill size={30} className="ms-2" />
                            <GiftFill size={30} className="ms-2" />
                            <br></br>
                            <h2 className="d-inline">Discounted Prices are below</h2>

                        </div>
                        {/* <div className="col">
                            <GiftFill size={30} className="me-2" />
                            <h2 className="d-inline">Discounted Prices are below</h2>
                            <GiftFill size={30} className="ms-2" />
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row">
                    {villas.map((villa) => (
                        <div key={villa.id} className="col-12 col-md-6 mb-4" >
                            <div className="card text-white bg-secondary">
                                <img
                                    className="card-img-top"
                                    style={{ borderRadius: '5px' }}
                                    src={`placeholder${imageIndex + 1}.jpg`}
                                    alt={villa.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-warning">{villa.name}</h5>
                                    <p className="card-text">{villa.description}</p>
                                    <div className="d-flex justify-content-between">
                                        <button
                                            type="button"
                                            className="btn btn-block btn-primary"
                                            onClick={() => handleDetails(villa.id)}
                                        >
                                            Details
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-block btn-success"
                                            onClick={() => handleBook(villa.id)}
                                        >
                                            Book
                                        </button>
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-warning">Price: ₹ {villa.price} / night</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    ))}
                </div>

                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton className='bg-success'>
                        <Modal.Title className="text-light">Villa Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedVilla && (
                            <>
                                <img
                                    className="card-img-top"
                                    style={{ borderRadius: '5px' }}
                                    src={`placeholder${imageIndex + 1}.jpg`}
                                    alt={selectedVilla.name}
                                />
                                <br></br>
                                <div key={selectedVilla.id}>
                                    <p className="card-text">{selectedVilla.description}</p>
                                    <p className="card-text">Sqft: {String(selectedVilla.sqft)}</p>
                                    <p className="card-text">Occupancy: {selectedVilla.occupancy}</p>
                                    <p className="text-warning">Price: ₹ {selectedVilla.price} / night</p>
                                </div>
                            </>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>


                <Modal show={showBookingModal} onHide={handleCloseBookingForm}>
                    <Modal.Header closeButton className='bg-success'>
                        <Modal.Title className="text-light">Book Villa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedVilla && (
                            <>
                                <img
                                    className="card-img-top"
                                    style={{ borderRadius: '5px' }}
                                    src={`placeholder${imageIndex + 1}.jpg`}
                                    alt={selectedVilla.name}
                                />

                                <div key={selectedVilla.id}>
                                    <br></br>
                                    <p className="card-text">{selectedVilla.description}</p>
                                    <p className="card-text">Sqft: {String(selectedVilla.sqft)}</p>
                                    <p className="card-text">Occupancy: {selectedVilla.occupancy}</p>
                                    <p className="card-text">Price: ₹ {selectedVilla.price} / night</p>

                                    <div className="form-group">
                                        <label className="card-text" >No. of nights</label>
                                        <select
                                            className="form-select"
                                            data-val="true"
                                            data-val-required="The Nights field is required."
                                            id="Nights"
                                            name="Nights"
                                            value={selectedNights}
                                            onChange={(e) => setSelectedNights(Number(e.target.value))}
                                        >
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                                                <option key={value} value={value}>
                                                    {value}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="card-text">Check In Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            data-val="true"
                                            data-val-required="The CheckInDate field is required."
                                            id="CheckInDate"
                                            name="CheckInDate"
                                            min={currentDate}
                                        />
                                    </div>

                                    <br></br>
                                    <p className="text-warning" style={{ textDecoration: 'underline', fontSize: '20px' }}>Total Price: ₹ {selectedNights * selectedVilla.price}</p>
                                </div>
                            </>
                        )}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseBookingForm}>
                            Close
                        </Button>
                        <Button variant="success" onClick={handleOpenBookingForm}>
                            Book Now
                        </Button>
                    </Modal.Footer>
                </Modal>
                {showBookingForm && (<>
                    <BookingForm
                        selectedVilla={selectedVilla}
                        selectedNights={selectedNights}
                        totalPrice={selectedNights * selectedVilla.price}
                        handleClose={handleCloseBookingForm}
                    />

                </>

                )}



            </div>

            <footer className="border-top footer text-muted">
                <div className="container text-center">
                    Made with <i className="bi bi-heart-fill"></i> by Vipul
                </div>
            </footer>


        </>



    );
}

export default Carousel;