import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";
import { onError } from "./libs/errorLib";

import "./App.css";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function onLoad() {
      try {
        await Auth.currentSession();
        userHasAuthenticated(true);
      } catch (e) {
        if (e !== "No current user") {
          onError(e);
        }
      }

      setIsAuthenticating(false);
    }

    onLoad();
  }, []);

  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);
    history.push("/login");
  }

  return (
    !isAuthenticating && (
      <div className="App container">
        <Navbar bg="light" expand="lg">
          <Link className="navbar-brand" to="/">
            Scratch
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ml-auto">
              {isAuthenticated ? (
                <>
                <LinkContainer to="/settings">
                    <Nav.Link>Settings</Nav.Link>
                  </LinkContainer>
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <LinkContainer to="/signup">
                    <Nav.Link>Signup</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
      </div>
    )
  );
}

export default App;
