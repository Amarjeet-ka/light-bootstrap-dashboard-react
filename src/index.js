import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminLayout from "layouts/Admin.js";
import Login from "views/Login";
import Card100 from "components/cards/Card100";
import Card200 from "components/cards/Card200";
import Card599 from "components/cards/Card599";
import Card299 from "components/cards/Card299";
import Card999 from "components/cards/Card999";
import Card1299 from "components/cards/Card1299";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    setLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
  };

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path="/login"
            render={(props) =>
              loggedIn ? (
                <Redirect to="/admin/dashboard" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />

          {/* Protected Routes */}
          <Route
            path="/admin"
            render={(props) =>
              loggedIn ? (
                <AdminLayout {...props} onLogout={handleLogout} username = {username} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/payment2"
            render={(props) =>
              loggedIn ? (
                <Card299 {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/payment3"
            render={(props) =>
              loggedIn ? (
                <Card599 {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/payment4"
            render={(props) =>
              loggedIn ? (
                <Card999 {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/payment5"
            render={(props) =>
              loggedIn ? (
                <Card1299 {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/payment1"
            render={(props) =>
              loggedIn ? (
                <Card200 {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/payment"
            render={(props) =>
              loggedIn ? (
                <Card100 {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          {/* Redirect to */}
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
