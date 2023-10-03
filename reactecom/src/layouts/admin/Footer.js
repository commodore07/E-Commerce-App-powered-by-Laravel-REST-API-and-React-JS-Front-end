import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
            <footer className="footer text-center text-muted">
                All Rights Reserved by Adminmart. Designed and Developed by <Link
                    to="https://wrappixel.com/">WrapPixel</Link>.
            </footer>
  );
}

export default Footer;