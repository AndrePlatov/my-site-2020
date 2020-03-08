import React from 'react';
import logo from './logo.svg';
import './App.css';
import SkillsGrid from './components/skills/SkillsGrid';
import { SkillsNavigator } from './components/skills/SkillsNavigator';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav, NavDropdown, Form, Row, Col } from 'react-bootstrap';
import { FormControl, Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" fixed="top">
        <Container fluid="lg">
          <Navbar.Brand href="#home">Andre Platov</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#skills">Skills</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <SkillsNavigator></SkillsNavigator>

    </div>
  );
}

export default App;
