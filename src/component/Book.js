
import React from 'react';

const Book = () => {

    return (

        <main b-dkv7otyr4f="" role="main">

            <div b-dkv7otyr4f="" className="loading spinner" style={{ display: 'none' }}></div>

            <div className="container pt-4 mt-0 mt-lg-4">

                <div className="row" style={{ border: '1px solid #aaa' }}>

                    <div className="col-12 col-lg-7 p-4 2 mt-4 mt-md-0">

                        <div className="row p-1 my-1" style={{ borderRadius: '20px' }}>

                            <div className="col-6">

                                <h3 className="text-success">Villa Details</h3>

                            </div>

                            <div className="text-end col-6">

                                <a className="btn btn-sm btn-outline-danger" style={{ width: '200px' }} href="/">

                                    <i className="bi bi-arrow-left-square"></i> &nbsp; Modify Selection

                                </a>

                            </div>

                            <hr />

                            <div className="row">

                                <div className="col-12 col-md-5">

                                    <img src="https://placehold.co/600x400" style={{ borderRadius: '10px' }} width="100%" />

                                </div>

                                <div className="col-12 col-md-7">

                                    <div className="row p-2">

                                        <div className="col-12">

                                            <p className="card-title text-warning" style={{ fontSize: 'xx-large' }}>Royal Villa</p>

                                            <p className="card-text" style={{ fontSize: 'large' }}>

                                                Fusce 11 tincidunt maximus leo, sed scelerisque massa auctor sit amet. Donec ex mauris, hendrerit quis nibh ac, efficitur fringilla enim.

                                            </p>

                                            <p className="h5 text-white">Villa Amenities</p>

                                            <ul>

                                                <li>Private Pool</li>

                                                <li>Microwave</li>

                                                <li>Private Balcony</li>

                                                <li>1 king bed and 1 sofa bed</li>

                                            </ul>

                                        </div>

                                    </div>

                                    <div className="row col-12">

                                        <span className="text-end p-0 pt-3 m-0">

                                            <span className="float-right">Max Occupancy: 4 adults </span><br />

                                            <span className="float-right pt-1">Villa Size: 550 sqft</span><br />

                                            <p className="text-warning font-weight-bold pt-1">

                                                USD

                                                <span style={{ color: '#ff6a00' }}>

                                                    ₹ 200.00 / night

                                                </span>

                                            </p>

                                        </span>

                                    </div>

                                </div>

                            </div>

                            <hr />

                            <div className="text-end">

                                <h4 className="text-danger font-weight-bold">

                                    Booking Total:

                                    <span style={{ borderBottom: '1px solid #ff6a00' }}>

                                        ₹ 400.00

                                    </span>

                                </h4>

                            </div>

                        </div>

                    </div>

                    <div className="col-12 col-lg-5 p-4 2 mt-4 mt-md-0" style={{ borderLeft: '1px solid #aaa' }}>
                        <form method="post" noValidate="novalidate">
                            {/* <input type="number" data-val="true" data-val-required="The VillaId field is required." id="VillaId" name="VillaId" value={2} />
                            <input type="text" data-val="true" data-val-required="The UserId field is required." id="UserId" name="UserId" value="495232dd-82e9-4475-94e5-a92de520bb9b" />
                            <input type="text" data-val="true" data-val-required="The CheckInDate field is required." id="CheckInDate" name="CheckInDate" value="29-11-2023" />
                            Add similar input elements for other hidden fields */}
                            <div className="row pt-1 mb-3 " style={{ borderRadius: '20px' }}>
                                <div className="col-12">
                                    <h3 className="text-success">Enter Booking Details</h3>
                                </div>
                            </div>
                            {/* First form group */}
                            <div className="form-group pt-0">
                                <label className="text-warning" htmlFor="Name">Name</label>
                                <input className="form-control" type="text" data-val="true" data-val-required="The Name field is required." id="Name" name="Name" value="Dipak Borbale" />
                                <span className="text-danger field-validation-valid" data-valmsg-for="Name" data-valmsg-replace="true"></span>
                            </div>
                            {/* Second form group */}
                            <div className="form-group pt-2">
                                <label className="text-warning" htmlFor="Phone">Phone</label>
                                <input className="form-control" type="text" id="Phone" name="Phone" value="7498964375" />
                                <span className="text-danger field-validation-valid" data-valmsg-for="Phone" data-valmsg-replace="true"></span>
                            </div>
                            {/* Third form group */}
                            <div className="form-group pt-2">
                                <label className="text-warning" htmlFor="Email">Email</label>
                                <input className="form-control" type="text" data-val="true" data-val-required="The Email field is required." id="Email" name="Email" value="dipakaborbale@gmail.com" />
                                <span className="text-danger field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true"></span>
                            </div>
                            {/* Fourth form group */}
                            <div className="form-group pt-2">
                                <label className="text-warning" htmlFor="CheckInDate">Check in Date</label>
                                <input disabled className="form-control input-validation-error" type="text" id="CheckInDate" name="CheckInDate" value="29-11-2023" />
                            </div>
                            {/* Fifth form group */}
                            <div className="form-group pt-2">
                                <label className="text-warning" htmlFor="CheckOutDate">Check Out Date</label>
                                <input disabled className="form-control" type="text" id="CheckOutDate" name="CheckOutDate" value="05-01-0001" />
                            </div>
                            {/* Sixth form group */}
                            <div className="form-group pt-2">
                                <label className="text-warning" htmlFor="Nights">No. of nights</label>
                                <input disabled className="form-control" type="number" id="Nights" name="Nights" value={4} />
                            </div>
                            {/* Seventh form group */}
                            <div className="form-group pt-2 pt-md-4">
                                <button type="submit" className="btn btn-success form-control">Looks Good! Checkout Now</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </main>

    );

};

export default Book;