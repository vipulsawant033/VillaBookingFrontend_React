import React from "react";

export function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <a class="navbar-brand" href="/home"><img src="./images/resort.png" alt="#" style={{ width: "35px" }} /></a>

              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="/home">Home</a>
              </li>

            </ul>
            <form className="d-flex">
              <a className="btn btn-outline-light" href="/login" style={{ marginRight: '10px', padding: '10px' }}>Login</a>
              <a className="btn btn-outline-light" href="/register" style={{ padding: '10px' }}>Register</a>
            </form>
          </div>
        </div>
      </nav>
    </div>)
}

export function NavbarUser() {
  const loggedInUser = sessionStorage.getItem('loggedInUser');
  const username = loggedInUser ? JSON.parse(loggedInUser).username : '';



  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <a class="navbar-brand" href="/homeuser"><img src="./images/resort.png" alt="#" style={{ width: "35px" }} /></a>

              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="/homeuser">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/manageBookings">Manage Bookings</a>
              </li>
              
              {/* <li className="nav-item">
                <a className="nav-link text-light" href="/VillaListPage">VillaList</a>
              </li> */}


            </ul>
            <form className="d-flex">
               {/* <h5 className="text-primary">{username}   </h5> */}
              <a className="nav-link active text-light" aria-current="page" href="" style={{ marginRight: '10px', padding: '10px' , fontSize: '20px' }}>{username}</a>
              <a className="btn btn-outline-danger" href="/login" style={{ padding: '10px' }}>Logout</a>
            </form>
          </div>
        </div>
      </nav>
    </div>)
}

export default function Nav(props){
  if (props.username) {
    return <NavbarUser></NavbarUser>;
  } else {
    return <Navbar></Navbar>;
  }
}