import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="app-info">
              <h1 className="app-name text-center styled">
                <span className="app-initial text-danger">SHOWTIME</span>SQUAD
              </h1>
            </div>
          </div>
          <div className="col-md-4  ">
            <div className="footer-title mb-4">
              <b>Useful Links </b>
            </div>
            <ul className="list-unstyled">
              <li><Link className='text-decoration-none text-light' to="/FAQ">FAQ</Link></li>
              <li><Link className='text-decoration-none text-light' to="/auth">Sign In</Link></li>
              <li>About Us</li>
              <li>Advertise with Us</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className="col-md-4 ">
            <div className="footer-title mb-4">
              <b>Help</b>
            </div>
            <ul className="list-unstyled">
              <li>Help Me</li>
              <li>Feedback</li>
              <li>Report a Issue / Bug</li>
            </ul>
          </div>
          <div className="col-md-4 ">
            <div className="footer-title mb-4">
              <b>Contact Us</b>
            </div>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <textarea className="form-control h-150" placeholder="Message..."></textarea>
              </div>
              <div className='d-flex justify-content-center'>
                <button type="submit" className="btn btn-danger">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='bg-dark text-white text-center py-3'>
        Copyright &copy; 2023 | SHOWTIMESQUAD
      </div>
    </footer>
  );
};

export default Footer;
