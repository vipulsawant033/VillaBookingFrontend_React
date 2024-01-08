import React from 'react';
const NavbarAdmin = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <a class="navbar-brand" href="/home"><img src="./images/resort.png" alt="#" style={{ width: "35px" }} /></a>

                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="/admin">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-light" href="/VillaListPage">VillaList</a>
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
        </div>
    );
};
export default NavbarAdmin;