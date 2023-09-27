import React from "react";

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
} from "react-bootstrap";

export default function AdharMannual() {
  return (
    <>
      <Container fluid>
        <Row>
          <h5 style={{fontWeight:'bold'}} >आधार कार्ड मैन्युअल बनाने के लिए फोटो सहित डाटा निकालने हेतु नीचे डाटा कैप्चर पर क्लिक करें</h5>
          <Col md="10">
            <Card>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Aadhar Card No.</label>
                        <Form.Control
                          //   defaultValue="michael23"
                          placeholder="Aadhar Card No."
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Name</label>
                        <Form.Control
                          //   defaultValue="michael23"
                          placeholder="name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Father's name
                        </label>
                        <Form.Control
                          placeholder="Father's name"
                          type="name"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>House No.</label>
                        <Form.Control
                          //   defaultValue="michael23"
                          placeholder="House No."
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Gali No,Locality</label>
                        <Form.Control
                          //   defaultValue="michael23"
                          placeholder="Panchayat"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">Post Office</label>
                        <Form.Control
                          placeholder="Post Office"
                          type="name"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>State</label>
                        <Form.Control
                          //   defaultValue="michael23"
                          placeholder="State"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          //   defaultValue="michael23"
                          placeholder="city"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">Pin Code</label>
                        <Form.Control
                          placeholder="Pin code"
                          type="name"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Date of Birth</label>
                        <Form.Control
                          //   defaultValue="michael23"
                          placeholder="dd/mm/yyyy"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Date of Birth Local</label>
                        <Form.Control
                          //   defaultValue="michael23"
                          placeholder="Auto Fill"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="genderSelect">Gender</label>
                        <br></br>
                        <Form.Select id="genderSelect">
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          //   defaultValue="Mike"
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          //   defaultValue="Andrew"
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row> */}
                  <Row>
                    {/* <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          //   defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          placeholder="Home Address"
                          cols="80"
                          rows="4"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col> */}
                    {/* </Row>
                  <Row> */}
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Select Image</label>
                        <Form.Control
                          //   defaultValue="Mike"
                          placeholder="City"
                          type="file"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Select Local Language</label>
                        <Form.Select>
                          <option value="hindi">Hindi</option>
                          <option value="bengali">Bengali</option>
                          <option value="telugu">Telugu</option>
                          <option value="marathi">Marathi</option>
                          <option value="tamil">Tamil</option>
                          <option value="urdu">Urdu</option>
                          <option value="punjabi">Punjabi</option>
                          <option value="gujarati">Gujarati</option>
                          <option value="kannada">Kannada</option>
                          <option value="odisha">Odia (Oriya)</option>
                          <option value="malayalam">Malayalam</option>
                          <option value="assamese">Assamese</option>
                          <option value="sanskrit">Sanskrit</option>
                          <option value="kashmiri">Kashmiri</option>
                          <option value="sindhi">Sindhi</option>
                          <option value="manipuri">Manipuri</option>
                          <option value="konkani">Konkani</option>
                          <option value="tulu">Tulu</option>
                          <option value="bhili">Bhili/Bhilodi</option>
                          <option value="khasi">Khasi</option>
                          <option value="garo">Garo</option>
                          {/* Add more language options as needed */}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                 
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          cols="80"
                          //   defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in

                          placeholder="Home Address"
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
                    Submit
                  </Button>
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
      </Container>
    </>
  );
}
