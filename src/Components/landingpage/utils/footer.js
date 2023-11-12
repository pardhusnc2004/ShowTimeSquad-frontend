import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const getcolor=()=>{
    if(localStorage.getItem("darkmode")==="yes"){
      return "text-light"
    }
    return "text-dark"
  }
  const getbg=()=>{
    if(localStorage.getItem("darkmode")==="yes"){
      return "bg-dark"
    }
    return "bg-light"
  }
  return (
    <footer className= {`${getbg()} text-white mt-5 py-2`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="app-info">
              <h1 className={`${getcolor()} text-center app-name styled`}>
                <span className="app-initial text-danger">SHOWTIME</span>SQUAD
              </h1>
            </div>
          </div>
          <div className="col-md-4  ">
            <div className="footer-title mb-4">
              <b className={`${getcolor()}`}>Useful Links </b>
            </div>
            <ul className="list-unstyled">
              <li><Link to="/FAQ" className={`${getcolor()} text-decoration-none`}>FAQ</Link></li>
              <li><Link to="/auth" className={`${getcolor()} text-decoration-none`}>Sign In</Link></li>
              <li className={`${getcolor()}`}>About Us</li>
              <li className={`${getcolor()}`}>Advertise with Us</li>
              <li className={`${getcolor()}`}>Terms and Conditions</li>
            </ul>
          </div>
          <div className="col-md-4 ">
            <div className="footer-title mb-4">
              <b className={`${getcolor()}`}>Help</b>
            </div>
            <ul className="list-unstyled">
              <li className={`${getcolor()}`}>Help Me</li>
              <li className={`${getcolor()}`}>Feedback</li>
              <li className={`${getcolor()}`}>Report a Issue / Bug</li>
            </ul>
          </div>
          <div className="col-md-4 ">
            <div className="footer-title mb-4">
              <b className={`${getcolor()}`}>Contact Us</b>
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
      <div className={`${getcolor()} ${getbg()} text-center py-3`}>
        Copyright &copy; 2023 | SHOWTIMESQUAD
      </div>
    </footer>
  );
};

export default Footer;
