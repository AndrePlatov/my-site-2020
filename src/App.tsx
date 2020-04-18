import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SkillsNavigator } from './components/skills/Grid/SkillsNavigator';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav, Tabs, Tab } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SkillTableTemplate from './components/skills/Table/SkillsTableTemplate';
import { mySkills } from './components/skills/skillsData';
import SkillsByType from './components/skills/Table/SkillsByType';
import SkillsByTechType from './components/skills/Table/SkillsByTechType';

function App() {
  return (
    <div className="App">



      <Router>
        <div>
          <Navbar bg="light" fixed="top">
            <Container fluid="lg">
              <Navbar.Brand href="/">Andre Platov</Navbar.Brand>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link to="/" className="nav-link">Skills Grid</Link>
                  <Link to="/skills-table" className="nav-link">Skills Table</Link>
                  <Link to="/skills-by-type" className="nav-link">Skills by Category</Link>
                  <Link to="/skills-by-tech-type" className="nav-link">Skills by Tech Category</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>


          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <SkillsNavigator></SkillsNavigator>
            </Route>
            <Route path="/skills-table">
              <h2>All Skills</h2>
              <SkillTableTemplate data={mySkills}></SkillTableTemplate>
            </Route>
            <Route path="/skills-by-type">
              <SkillsByType></SkillsByType>
            </Route>
            
            <Route path="/skills-by-tech-type">
              <SkillsByTechType></SkillsByTechType>
            </Route>
          </Switch>
        </div>
      </Router>






    </div>
  );
}

export default App;
