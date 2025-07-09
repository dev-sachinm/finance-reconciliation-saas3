import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Image from 'next/image';
import Link from 'next/link';

function NavbarWithLogo() {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={Link} href="/" className="d-flex align-items-center">
        <Image
          src="/logo.svg"
          alt="Financial Data Reconsillation"
          width={50}
          height={50}
          className="me-2"
        />
        <span className="fw-bold fs-5">Financial Data Reconsillation</span>
      </NavbarBrand>
    </Navbar>
  );
}

export default NavbarWithLogo;