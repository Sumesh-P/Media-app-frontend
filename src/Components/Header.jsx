import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { FaMusic } from "react-icons/fa6";
function Header() {
  return (
    <div className='headerDiv'>
      <MDBNavbar light bgColor='hsl(180, 24%, 35%)' >
        <MDBContainer fluid>
        <MDBNavbarBrand href="#" className="d-flex align-items-center justify-content-between w-100">
  <div className="d-flex align-items-center">
    <FaMusic className="fs-1 mx-2 text-warning" />
    <h1 className="mb-0 text-white">MelodySphere</h1>
  </div>
  <p className="mb-0 slogan fs-2">"Your Tunes, Your Vibes, Anytime!" 🎧</p>
</MDBNavbarBrand>

        </MDBContainer>
      </MDBNavbar>

    </div>
  )
}

export default Header