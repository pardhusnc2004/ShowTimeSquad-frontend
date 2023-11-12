import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './style.css';
function OffcanvasExample() {
  const handlelogout = () => {
    localStorage.setItem('islogged', false);
    window.location.reload()
  }
  const getcolor=()=>{
    if(localStorage.getItem("darkmode")==="yes"){
      return "text-light"
    }
    return "text-dark"
  }
  const geticon=()=>{
    if(localStorage.getItem("darkmode")==="yes"){
      return "bg-light text-dark"
    }
    return "bg-dark text-light"
  }
  const getprofile = () =>{
    window.location.href="/#/profile/"+localStorage.getItem("id");
  }
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} variant='tabs' className="">
          <Container fluid>
            <Navbar.Brand href="#" className={`${getcolor()}`}>ShowTimeSquad</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  ShowTimeSquad
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        
                        aria-label="Search"
                    />
                    <Button variant="outline-success text-danger">Search</Button>
                    </Form>
                  <Nav.Link onClick={()=>{if(localStorage.getItem("darkmode")==='yes') {localStorage.setItem("darkmode","no");window.location.reload()} else {localStorage.setItem("darkmode","yes");window.location.reload()}}}>
                      <FontAwesomeIcon icon={faCircleHalfStroke} className={`${geticon()}`} style={{height: "20px",borderRadius: "10px"}} />
                  </Nav.Link>
                  {localStorage.getItem('islogged')!=='true' ? <Link to="/auth"><button className="btn btn-primary">SignIn/Register</button></Link> : 
                    <>
                    <div className="d-flex align-items-center px-3" onClick={getprofile} style={{cursor:"pointer"}}>
                      <FontAwesomeIcon icon={faUser} style={{ fontSize: '20px', borderRadius: '10px', marginRight: '8px' }} className={`${getcolor()}`}/>
                      <p className={`text-center mb-0 ${getcolor()}`}>{localStorage.getItem('username')}</p>
                    </div>
                    <Button className={`btn btn-warning ${getcolor()}`} onClick={handlelogout}>
                    Logout
                    </Button>
                    </>
                  }
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;