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
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <img src={require("assets/img/CleanCAst_logo.png")} />
          </NavbarBrand>
        </div>
        <Nav navbar>
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
                const anchor = document.querySelector('#ci-for-personal')
                anchor.scrollIntoView({ behavior: 'smooth', alignToTop: true })
              }}>
              Carbon Intensity for<br></br>
              Personal Charging
            </NavLink>
          </NavItem>
          <NavItem className="p-0">
            <NavLink
              style={{ "cursor": "pointer" }}
              onClick={() => {
                const anchor = document.querySelector('#ci-for-dev')
                anchor.scrollIntoView({ behavior: 'smooth', alignToTop: true })
              }}>
              Carbon Intensity for<br></br>Developers
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}
