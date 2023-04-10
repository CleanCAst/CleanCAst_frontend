import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <Row>
              <Col md="3">
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow"
                  src={require("assets/img/bronte_baer.png")}
                  style={{ width: "150px" }}
                />
              </Col>
              <Col md="6">
                <h3 style={{ marginBottom: 10 }}>Bronte Baer</h3>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="mailto:bronte.baer@berkeley.edu"
                  id="tooltip230450802"
                  target="_blank">
                  <i className="fa fa-envelope"/>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450802">Email</UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://github.com/bronte-baer"
                  id="tooltip622135962"
                  target="_blank">
                  <i className="fab fa-github" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">GitHub</UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.linkedin.com/in/brontebaer/"
                  id="tooltip230450801"
                  target="_blank">
                  <i className="fab fa-linkedin" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">LinkedIn</UncontrolledTooltip>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md="3">
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow"
                  src={require("assets/img/kurt_eulau.jpg")}
                  style={{ width: "150px" }}
                />
              </Col>
              <Col md="6">
                <h3 style={{ marginBottom: 10 }}>Kurt Eulau</h3>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="mailto:keulau@berkeley.edu"
                  id="tooltip230450802"
                  target="_blank">
                  <i className="fa fa-envelope"/>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450802">Email</UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://github.com/kurteulau"
                  id="tooltip622135962"
                  target="_blank">
                  <i className="fab fa-github" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">GitHub</UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.linkedin.com/in/kurt-eulau/"
                  id="tooltip230450801"
                  target="_blank">
                  <i className="fab fa-linkedin" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">LinkedIn</UncontrolledTooltip>
              </Col>
            </Row>
          </Col>


          <Col>
          <Row>
              <Col md="3">
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow"
                  src={require("assets/img/briana_hart.jpg")}
                  style={{ width: "150px" }}
                />
              </Col>
              <Col md="6">
                <h3 style={{ marginBottom: 10 }}>Briana Hart</h3>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="mailto:briana.hart@berkeley.edu"
                  id="tooltip230450802"
                  target="_blank">
                  <i className="fa fa-envelope"/>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450802">Email</UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://github.com/brianahart"
                  id="tooltip622135962"
                  target="_blank">
                  <i className="fab fa-github" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">GitHub</UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.linkedin.com/in/briana-hart-a5590bb0/"
                  id="tooltip230450801"
                  target="_blank">
                  <i className="fab fa-linkedin" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">LinkedIn</UncontrolledTooltip>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md="3">
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow"
                  src={require("assets/img/james.jpg")}
                  style={{ width: "150px" }}
                />
              </Col>
              <Col md="6">
                <h3 style={{ marginBottom: 10 }}>Tom Welsh</h3>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="mailto:twelsh@berkeley.edu"
                  id="tooltip230450802"
                  target="_blank">
                  <i className="fa fa-envelope"/>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450802">Email</UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href=""
                  id="tooltip622135962"
                  target="_blank">
                  <i className="fab fa-github" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">GitHub</UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href=""
                  id="tooltip230450801"
                  target="_blank">
                  <i className="fab fa-linkedin" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">LinkedIn</UncontrolledTooltip>
              </Col>
            </Row>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}
