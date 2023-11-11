import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom';
function OffcanvasExample() {const handlelogout = () => {
    localStorage.setItem('islogged', false);
    window.location.reload()
  }
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} variant='tabs' className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">ShowTimeSquad</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
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
                    <Button variant="outline-success">Search</Button>
                    </Form>
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  {!localStorage.getItem('islogged') ? <Link to="/auth"><button className="btn btn-primary">SignIn/Register</button></Link> : null}
                  
                 {localStorage.getItem("islogged") ? <Nav.Link className='btn btn-outline-warning' onClick={handlelogout}>Logout</Nav.Link> : null}
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