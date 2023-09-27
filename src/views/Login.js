import React, { useState } from "react";
import {
  Form,
  Card,
  Container,
  Navbar,
  Nav,
  Col,
  Row,
  Button,
  Tab,
  Tabs,
  Badge,
  Spinner,
} from "react-bootstrap";
import lap from "../assets/img/th.jpg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Login({ onLogin }) {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registrationUsername, setRegistrationUsername] = useState("");
  const [registrationUsernumber, setRegistrationUsernumber] = useState("");
  const [registrationUseremail, setRegistrationUseremail] = useState("");





  const [registrationPassword, setRegistrationPassword] = useState("");
  const [registrationconfirmPassword, setRegistrationconfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistrationLoading, setIsRegistrationLoading] = useState(false);
  const [userType, setUserType] = useState('');
  const [paymentMode, setPaymentMode] = useState(''); 
  const history = useHistory();

  const handleLogin = async () => {
    setIsLoading(true); // Start loading
    setError(null); // Clear any previous errors
  
    try {
      const response = await fetch("https://pragatiserver.onrender.com/porlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: loginUsername,
          password: loginPassword,
        }),
      });
  
      // if (!response.ok) {
      //   // Check for HTTP response status indicating an error
      //   throw new Error("Login failed. Please check your credentials.");
      // }
  
      const data = await response.json();
      
      // Handle a successful login response
      window.alert("Login Successful");
      setSuccessMessageVisible(true);
      history.push("/admin/dashboard");
      onLogin();
    } catch (error) {
      // Handle network errors, server errors, or other exceptions
      setError("An error occurred. Please check your network connection and try again later.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // Stop loading, regardless of success or failure
    }
  };
  
  const handleRegistration = async () => {
    setIsRegistrationLoading(true); // Start loading
    try {
      // Create the registration data object
      const registrationData = {
        username: registrationUsername,
        mobileNumber: registrationUsernumber, // Assuming this is for mobile number
        email: registrationUseremail, // Assuming this is for email
        password: registrationPassword,
        userType: userType,
        paymentMode: paymentMode,
      };
            if (registrationPassword !== registrationconfirmPassword) {
      // Display an error message and return early if they don't match
      setError("Password and confirm password do not match.");
       window.alert('Password does not match');
      return;
    }
      // Send registration request to the server
      const response = await fetch(
        "https://pragatiserver.onrender.com/pregister",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registrationData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        // Print the response data received from the server
        console.log("Response Data from Server:", data);

        if (data.success) {
          // Registration successful
          setSuccessMessageVisible(true);
          // You can implement additional logic here, e.g., redirect to login page
        } else {
          // Handle registration failure
          window.alert("Registration Sucessfull");
        }
      } else {
        // Handle server error
        console.error("Server error.");
      }
    } catch (error) {
      // Handle network error
      console.error("An error occurred:", error);
    } finally {
      setIsRegistrationLoading(false); // Stop loading
    }
  };

  return (
    <>
      <Navbar
        fixed="top"
        expand="lg"
        variant="dark"
        bg="info"
        // style={{ backgroundColor: "gray" }}
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href="#" style={{ color: "white", fontSize: "24px" }}>
             UCL AADHAR UPDATE
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Add your navigation links here if needed */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container style={{ backgroundColor: "gray" }} fluid>
        <Row
          style={{ textAlign: "center" }}
          className="justify-content-center mt-5"
        >
          <Card md="12" style={{ marginTop: "100px",marginBottom:'300px' }}>
            <Row>
              <Col
                md="3"
                style={{
                  marginTop: "100px",
                  marginLeft: "20px",
                  textAlign: "",
                }}
              >
                <h2 style={{ fontWeight: "bold" }}> Aadhar Demographic And Child Enrollment</h2>
                <h2>
                  {" "}
                  <Badge bg="primary" style={{ color: "white" }}>
                    New
                  </Badge>
                </h2>
                <img
                  height={250}
                  src={lap}
                  alt="Image Not found"
                  style={{ maxWidth: "100%",marginBottom:'200px'}} // Adjust the image size
                />
              </Col>

              <Col>
                <Card md="">
                  <Tabs defaultActiveKey="login" id="login-registration-tabs">
                    <Tab eventKey="login" title="Login">
                      <Row md="6">
                        <Col
                          md="6"
                          style={{
                            margin: "40px",
                            marginLeft: "250px",
                            textAlign: "center",
                          }}
                        >
                          <Card.Header
                            style={{ backgroundColor: "", textAlign: "center" }}
                          >
                            <Card.Title
                              as="h2"
                              style={{
                                backgroundColor: "",
                                fontWeight: "bold",
                              }}
                            >
                              Login
                            </Card.Title>
                          </Card.Header>
{/* 
                          <div style={{ textAlign: "center" }}>
                            <Button
                              style={{
                                marginTop: "20px",
                                backgroundColor: "blue",
                                color: "white",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              Login with facebook
                            </Button>
                            <br></br>{" "}
                            <Button
                              style={{
                                marginTop: "20px",
                                backgroundColor: "red",
                                borderColor: "red",
                                color: "white",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              Login with Google
                            </Button>
                          </div> */}
                          <Card.Body>
                            <Form>
                              <Form.Group
                                controlId="formLoginUsername"
                                className="mt-4"
                              >
                                <Form.Label> Username / Full name </Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter Your Mobile Numbr"
                                  value={loginUsername}
                                  onChange={(e) =>
                                    setLoginUsername(e.target.value)
                                  }
                                />
                              </Form.Group>

                              <Form.Group
                                controlId="formLoginPassword"
                                className="mt-4"
                              >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                  type="password"
                                  placeholder="Enter password"
                                  value={loginPassword}
                                  onChange={(e) =>
                                    setLoginPassword(e.target.value)
                                  }
                                />
                              </Form.Group>

                              <Button
                                onClick={handleLogin}
                                type="button"
                                className="mt-4"
                                style={{
                                  backgroundColor: "blue",
                                  padding: "10px 20px",
                                  margin: "10px",
                                  color: "white",
                                }}
                                disabled={isLoading} // Disable the button when loading
                              >
                                {isLoading ? (
                                  <>
                                    <Spinner
                                      animation="grow"
                                      variant="danger"
                                    />
                                    <Spinner animation="grow" variant="light" />
                                    <Spinner
                                      animation="grow"
                                      variant="warning"
                                    />
                                  </>
                                ) : (
                                  "CLICK HERE TO LOGIN"
                                )}
                              </Button>

                              {/* Display error message if there is an error */}
                              {/* {error && <div className="error">{error}</div>} */}

                              {/* Display success message */}
                              {successMessageVisible && (
                                <div className="success">Login successful!</div>
                              )}
                            </Form>

                            {/* {error && <p>{error}</p>} */}
                           
                          </Card.Body>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="registration" title="Registration">
                      <Col
                        md="7"
                        style={{
                          margin: "40px",
                          marginLeft: "250px",
                          textAlign: "start",
                        }}
                      >
                        <Card.Header
                          style={{ backgroundColor: "", textAlign: "center" }}
                        >
                          <Card.Title
                            as="h2"
                            style={{ backgroundColor: "", fontWeight: "bold" }}
                          >
                            Registration
                          </Card.Title>
                          <hr></hr>
                        </Card.Header>
                        {/* <div style={{ textAlign: "center" }}>
                          <Button
                            style={{
                              backgroundColor: "blue",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            {" "}
                            SignUp with facebook
                          </Button>
                          <br></br>{" "}
                          <Button
                            style={{
                              marginTop: "20px",
                              backgroundColor: "red",
                              borderColor: "red",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            {" "}
                            SignUp with Google
                          </Button>
                        </div> */}
                        <Card.Body>
                          <Form>
                            <Form.Group
                              controlId="formRegistrationUsername"
                              className="mt-4"
                            >
                              <Form.Label>Username / Full Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter Your Name"
                                value={registrationUsername}
                                onChange={(e) =>
                                  setRegistrationUsername(e.target.value)
                                }
                              />
                            </Form.Group>
                            <Form.Group
                              controlId="formRegistrationMobile"
                              className="mt-4"
                            >
                              <Form.Label>Mobile Number</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter Your Mobile Number"
                                value={registrationUsernumber}
                                onChange={(e) =>
                                  setRegistrationUsernumber(e.target.value)
                                }
                              />
                            </Form.Group>
                            <Form.Group
                              controlId="formRegistrationEmail"
                              className="mt-4"
                            >
                              <Form.Label>Email Address</Form.Label>
                              <Form.Control
                                type="email"
                                placeholder="Enter Your Email"
                                value={registrationUseremail}
                                onChange={(e) =>
                                  setRegistrationUseremail(e.target.value)
                                }
                              />
                            </Form.Group>
                            <Form.Group
                              controlId="formRegistrationPassword"
                              className="mt-4"
                            >
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={registrationPassword}
                                onChange={(e) =>
                                  setRegistrationPassword(e.target.value)
                                }
                              />
                            </Form.Group>
                            <Form.Group
                              controlId="formRegistrationPassword"
                              className="mt-4"
                            >
                              <Form.Label>Confirm Password</Form.Label>
                              <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={registrationconfirmPassword}
                                onChange={(e) =>
                                  setRegistrationconfirmPassword(e.target.value)
                                }
                              />
                            </Form.Group>
                            <Form.Group
                              controlId="formUserType"
                              className="mt-4"
                            >
                              <Form.Label>User Type</Form.Label>
                              <Form.Control
                                as="select"
                                value={userType}
                                onChange={(e) => setUserType(e.target.value)}
                              >
                                <option value="retailer">Retailer</option>
                                <option value="distributor">Distributor</option>
                              </Form.Control>
                            </Form.Group>
                            <Form.Group
                              controlId="formPaymentMode"
                              className="mt-4"
                            >
                              <Form.Label>Select Payment Mode</Form.Label>
                              <Form.Control
                                as="select"
                                value={paymentMode}
                                onChange={(e) => setPaymentMode(e.target.value)}
                              >
                                <option value="UPIFAST">UPIFAST</option>
                                {/* Add more payment options here */}
                              </Form.Control>
                            </Form.Group>
                            <Button
                              onClick={handleRegistration}
                              type="button"
                              className="mt-4"
                              style={{
                                backgroundColor: "blue",
                                padding: "10px 20px",
                                margin: "10px",
                                color: "white",
                              }}
                              disabled={isRegistrationLoading} // Disable the button when loading
                            >
                              {isRegistrationLoading ? (
                                <>
                                  <Spinner animation="grow" variant="danger" />
                                  <Spinner animation="grow" variant="light" />
                                  <Spinner animation="grow" variant="warning" />
                                </>
                              ) : (
                                "Register"
                              )}
                            </Button>

                            {successMessageVisible && (
                              <div className="success-message">
                                User Registered Successfully
                              </div>
                            )}
                          </Form>
                        </Card.Body>
                      </Col>
                    </Tab>
                  </Tabs>
                </Card>
              </Col>
            </Row>
          </Card>
        </Row>
      </Container>
    </>
  );
}

export default Login;
