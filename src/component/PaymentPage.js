import React from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRadio,
    MDBRow,
} from "mdb-react-ui-kit";

export default function PaymentPage({ selectedVilla, selectedNights, totalPrice }) {
    return (
        <MDBContainer fluid className="p-5" style={{ backgroundColor: "#eee" }}>
            <MDBCard>
                <MDBCardBody>
                    <MDBRow className="d-flex justify-content-center pb-5">
                        <MDBCol md="7" xl="5" className="mb-4 mb-md-0">
                            <div className="py-4 d-flex flex-row">
                                <h5>
                                    <span className="far fa-check-square pe-2"></span>
                                    <b>ELIGIBLE</b> |
                                </h5>
                                <span className="ps-2">Pay</span>
                            </div>
                            <h4 className="text-success">$85.00</h4>
                            <h4>selectedVilla</h4>


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
                                <MDBBtn block size="lg">
                                    Proceed to payment
                                </MDBBtn>
                            </div>
                        </MDBCol>
                        <MDBCol md="5" xl="4" offsetXl="1">
                            {" "}
                            <div className="py-4 d-flex justify-content-end">
                                <h6>
                                    <a href="/homeuser">Cancel and return to website</a>
                                </h6>
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
                                    <div className="ms-auto">$186.76</div>
                                </div>
                                
                                <div className="p-2 d-flex">
                                    <MDBCol size="8">Copayment</MDBCol>
                                    <div className="ms-auto">+ $40.00</div>
                                </div>
                                <div className="border-top px-2 mx-2"></div>
                                
                                
                                <div className="p-2 d-flex pt-3">
                                    <MDBCol size="8">
                                        <b>Total</b>
                                    </MDBCol>
                                    <div className="ms-auto">
                                        <b className="text-success">$85.00</b>
                                    </div>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}