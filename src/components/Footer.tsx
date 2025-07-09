import React from 'react';
import NavbarWithLogo from '@/components/NavbarWithLogo'

const Footer = () => (
  <footer className="bg-light p-3 text-center" data-testid="footer">
    <NavbarWithLogo />
    <p data-testid="footer-text">
      Sample project provided by <a href="https://auth0.com">Auth0</a>
    </p>
  </footer>
);

export default Footer;