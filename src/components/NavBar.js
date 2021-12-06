import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Image, InputGroup, FormControl } from "react-bootstrap";
import { OverlayTrigger, Tooltip} from "react-bootstrap";
import Logo from "./tiendamia.png";
import {Link} from "react-router-dom";

import "./NavBar.css";
import CartWidget from "./cartwidget/CartWidget";
import { faHeart,faStream } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormAuth from "./form-auth/FormAuth";

function NavBar() {
  return (
    <Navbar className="navbarme" expand="lg">
      <Container> 
        <Navbar.Brand href="#home">
          <Link to="/">
          <Image src={Logo} rounded />
          </Link>
        </Navbar.Brand>
        <InputGroup size="sm" className="formMain mb-3">
          <FormControl
            placeholder="Busca entre millones de productos"
            aria-label="Username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>

            <Nav.Link href="#deets">
            <OverlayTrigger
      key={'bottom'}
      placement={'bottom'}
     delay={'250'}
      overlay={
        <Tooltip id={`tooltip-bottom`}>
          Widget de favoritos.<br/> Aca va un prop
        </Tooltip>
      }
    > 
      <p variant="secondary"><FontAwesomeIcon style={{marginRight:"6px"}} icon={faHeart} /> 
 Favoritos</p>
    </OverlayTrigger>
            </Nav.Link>
            <FontAwesomeIcon style={{margin:"10px -2px 0 10px"}} icon={faStream} />

            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item >
               <Link to="/category/deportivas"> Deportivas</Link>
                </NavDropdown.Item>
              <NavDropdown.Item >
              <Link to="/category/casual">Casual</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <Link to="/category/trekking">Trekking</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              <Link to="/">Todas las categorias</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">
             
            </Nav.Link>
          </Nav>
        </Navbar.Collapse> 
        <FormAuth/>
        <Link to="/cart">
        <CartWidget classCount="cart-count" cartCount="3" tittleCart="Carrito" className="card-widget" />
        </Link>      
      </Container>

    </Navbar>
  );
}

export default NavBar;
