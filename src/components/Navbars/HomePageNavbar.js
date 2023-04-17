import React from "react";
import { Link } from "react-router-dom";


// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");

  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-primary");
      document.getElementById("navbar-brand").style.display = "none";
      document.getElementById("navbar-brand-white").style.display = "inline-block";
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
      document.getElementById("navbar-brand").style.display = "inline-block";
      document.getElementById("navbar-brand-white").style.display = "none";
    }
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <img src={require("assets/img/CleanCAst_logo_green.png")} />
          </NavbarBrand>
          <NavbarBrand to="/" tag={Link} id="navbar-brand-white" style={{display: 'none'}}>
            <img src={require("assets/img/CleanCAst_logo.png")} />
          </NavbarBrand>
        </div>
        <Nav navbar>
        <NavItem className="p-0">
            <NavLink
              style={{ "cursor": "pointer" }}
              onClick={() => {
                const anchor = document.querySelector('#when-to-charge')
                anchor.scrollIntoView({ behavior: 'smooth', alignToTop: true })
              }}>
              When to<br></br>Charge
            </NavLink>
          </NavItem>
          <NavItem className="p-0">
            <NavLink
              style={{ "cursor": "pointer" }}
              onClick={() => {
                const anchor = document.querySelector('#what-is-ci')
                anchor.scrollIntoView({ behavior: 'smooth', alignToTop: true })
              }}>
              What is Carbon<br></br>Intensity?
            </NavLink>
          </NavItem>
          <NavItem className="p-0">
            <NavLink
              style={{ "cursor": "pointer" }}
              onClick={() => {
                const anchor = document.querySelector('#methodology')
                anchor.scrollIntoView({ behavior: 'smooth', alignToTop: true })
              }}>
              Methodology
            </NavLink>
          </NavItem>
          <NavItem className="p-0">
            <NavLink
              style={{ "cursor": "pointer" }}
              onClick={() => {
                const anchor = document.querySelector('#model-results')
                anchor.scrollIntoView({ behavior: 'smooth', alignToTop: true })
              }}>
              Model Results
            </NavLink>
          </NavItem>
          <NavItem className="p-0">
            <NavLink
              style={{ "cursor": "pointer" }}
              onClick={() => {
                const anchor = document.querySelector('#personal-charging')
                anchor.scrollIntoView({ behavior: 'smooth', alignToTop: true })
              }}>
              Future Research<br/>Opportunities
            </NavLink>
          </NavItem>
          <NavItem className="p-0">
            <NavLink
              style={{ "cursor": "pointer" }}
              onClick={() => {
                const anchor = document.querySelector('#technical-details')
                anchor.scrollIntoView({ behavior: 'smooth', alignToTop: true })
              }}>
              FAQ
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}
