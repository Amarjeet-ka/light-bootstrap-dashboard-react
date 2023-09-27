import { useState } from "react";
import React  from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Alert,
} from "react-bootstrap";

export default function Advance() {
  
  const [aadharNumber, setAadharNumber] = useState("");

  const handleAadharChange = (e) => {
    // Remove non-digit characters from the input
    const sanitizedInput = e.target.value.replace(/\D/g, "");

    // Limit the input to 12 digits
    const limitedInput = sanitizedInput.slice(0, 12);

    setAadharNumber(limitedInput);
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="variant-light" md="10">
            <Card>
              <Card.Header>
                <Card.Title as="h4">
                  Advance Aadhar <sup>new</sup>
                </Card.Title>
              </Card.Header>
              {["secondary"].map((variant) => (
                <Alert
                  key={variant}
                  variant={variant}
                  style={{ color: "black", margin: "20px" }}
                >
                  Your Wallet Balance is Low, Please Recharge and use this
                  Service.
                </Alert>
              ))}
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      {/* <Form.Group>
                        <label>Company (disabled)</label>
                        <Form.Control
                          defaultValue="Creative Code Inc."
                          disabled
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group> */}
                    </Col>
                    <Col className="px-1" md="3">
                      {/* <Form.Group>
                        <label>Username</label>
                        <Form.Control
                          defaultValue="michael23"
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group> */}
                    </Col>
                    <Col className="pl-1" md="4">
                      {/* <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group> */}
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Enter Your 12 Digit Aadhar Number</label>
                        <Form.Control
                          placeholder="Enter Your 12 Digit Aadhar Number"
                          type="text"
                          value={aadharNumber}
                          onChange={handleAadharChange}
                          maxLength={12}
                        ></Form.Control>
                      </Form.Group>
                      <br></br>
                      <Button
                        className="btn-fill pull-right"
                        type=""
                        variant="info"
                      >
                        Submit
                      </Button>
                    </Col>
                    {/* <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col> */}
                  </Row>
                  {/* <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          placeholder="ZIP Code"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>About Me</label>
                        <Form.Control
                          cols="80"
                          defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                          that two seat Lambo."
                          placeholder="Here can be your description"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                  </Button> */}
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg")}
                    ></img>
                    <h5 className="title">Mike Andrew</h5>
                  </a>
                  <p className="description">michael24</p>
                </div>
                <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col> */}
        </Row>
        <Row>
          <Col>
            <Card>
              <ul
                style={{
                  listStyleType: "none",
                  paddingInlineStart: "0",
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                ध्यान दें
                <li style={{ color: "blue", fontWeight: "bold" }}>
                  1. अगर डाटा एक बार में नहीं आता है तो दुबारा कैप्चर करे डाटा आ
                  जायेगा
                </li>
                <li style={{ color: "red", fontWeight: "bold" }}>
                  2. इस फंक्शन में सारे डिवाइस ऑटोमेटिक काम करते है और सारे
                  डिवाइस सपोर्ट करते है
                </li>
              </ul>
              <ul
                style={{
                  listStyleType: "none",
                  paddingInlineStart: "0",
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Notice:
                <li style={{ color: "blue", fontWeight: "bold" }}>
                  1. If the data does not come at once, then the data will be
                  captured again
                </li>
                <li style={{ color: "red", fontWeight: "bold" }}>
                  2. In this function all the devices work automatically and all
                  the devices are supported
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
