import React, { useState } from 'react';
import { Modal, Button} from 'react-bootstrap';
import { Paypal } from 'react-bootstrap-icons';
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRadio,
    MDBRow,
} from "mdb-react-ui-kit";
import { toast } from 'react-toastify';



const BookingForm = ({ selectedVilla, selectedNights, totalPrice, handleClose }) => {
    // State variables for form fields
    const [name] = useState('');

    // Function to handle form submission
    const handleSubmit = () => {
        // Add your form submission logic here
        console.log('Form submitted:', { name });
        toast.success('Booking successful!');
        window.location.href = '/homeuser';
        // Close the booking form
        handleClose();
    };

    return (
        <>
        
            <Modal show={true} onHide={handleClose} >
                <Modal.Header closeButton >
                    <Modal.Title>Booking Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* <p>Selected Villa: {selectedVilla && selectedVilla.name}</p>
                    <p>Selected Nights: {selectedNights}</p>
                    <p>Total Price: ₹ {totalPrice}</p> */}
                    {/* Your form fields go here */}
                    <MDBContainer fluid className="p-5" style={{ backgroundColor: "#eee" }}>
                        <MDBCard >
                            <MDBCardBody style={{ textAlign: 'left' }}>
                                <MDBRow className="d-flex justify-content-left pb-5">
                                    <MDBCol className="mb-4 mb-md-0 col-12">
                                        <div className="py-4 d-flex flex-row">
                                            <h5>
                                                <Paypal size={30} className="ms-2"></Paypal>
                                                <b>&nbsp;ELIGIBLE</b>
                                            </h5>
                                            <span className="ps-2">Pay</span>
                                        </div>
                                        <h4 className="text-success"> ₹ {totalPrice}</h4>
                                        <h4>{selectedVilla && selectedVilla.name}</h4>


                                        <hr />
                                        <div className="pt-2">

                                            <div className="d-flex flex-row pb-3">
                                                <div className="d-flex align-items-center pe-2">
                                                    <MDBRadio name="radioNoLabel" id="radioNoLabel1" checked />
                                                </div>
                                                <div className="rounded border d-flex w-100 p-3 align-items-center">
                                                    <p className="mb-0">
                                                        <MDBIcon
                                                            fab
                                                            icon="cc-visa"
                                                            size="lg"
                                                            className="text-primary pe-2"
                                                        />{" "}
                                                        Visa Debit Card
                                                    </p>
                                                    <div className="ms-auto">************3456</div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row pb-3">
                                                <div className="d-flex align-items-center pe-2">
                                                    <MDBRadio name="radioNoLabel" id="radioNoLabel1" checked />
                                                </div>
                                                <div className="rounded border d-flex w-100 p-3 align-items-center">
                                                    <p className="mb-0">
                                                        <MDBIcon
                                                            fab
                                                            icon="cc-mastercard"
                                                            size="lg"
                                                            className="text-dark pe-2"
                                                        />{" "}
                                                        Mastercard Office
                                                    </p>
                                                    <div className="ms-auto">************1038</div>
                                                </div>
                                            </div>

                                            <div
                                                className="rounded d-flex flex-column p-2"
                                                style={{ backgroundColor: "#f8f9fa" }}
                                            >
                                                <div className="p-2 me-3">
                                                    <h4>Order Recap</h4>
                                                </div>
                                                <div className="p-2 d-flex">
                                                    <MDBCol size="8">Contracted Price</MDBCol>
                                                    <div className="ms-auto">₹ {totalPrice+(totalPrice/10)}</div>
                                                </div>

                                                <div className="p-2 d-flex">
                                                    <MDBCol size="8">Discounts and Offer</MDBCol>
                                                    <div className="ms-auto">- ₹ {(totalPrice/10)}</div>
                                                </div>
                                                <div className="border-top px-2 mx-2"></div>


                                                <div className="p-2 d-flex pt-3">
                                                    <MDBCol size="8">
                                                        <b>Total</b>
                                                    </MDBCol>
                                                    <div className="ms-auto">
                                                        <b className="text-success">₹ {totalPrice}</b>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </MDBCol>

                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleSubmit}>
                        Payment
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
};

export default BookingForm;
