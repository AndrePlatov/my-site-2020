import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SkillsNavigator } from './components/skills/Grid/SkillsNavigator';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SkillTableTemplate from './components/skills/Table/SkillsTableTemplate';
import { mySkills } from './components/skills/skillsData';
import SkillsByType from './components/skills/Table/SkillsByType';
import Skills_ByTechCategory from './components/skills/Table/Skills_ByTechCategory';
import { AppBar, Toolbar, Typography, makeStyles, createStyles, Theme, Box, Tabs, Tab, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(3);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="App">


      <AppBar position="fixed">
        <Toolbar variant="dense" >

          <Typography variant="h6" color="inherit">
            Andre Platov
              </Typography>
              <div className={classes.grow} />
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
            <Tab label="Skills Grid" {...a11yProps(0)} />
            <Tab label="Skills Table" {...a11yProps(1)} />
            <Tab label="Skills by Category" {...a11yProps(2)} />
            <Tab label="Skills by Tech Category" {...a11yProps(3)} />
          </Tabs>

        </Toolbar>
      </AppBar>
      <Container>
        <TabPanel value={value} index={0}>
          <SkillsNavigator></SkillsNavigator>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <h2>All Skills</h2>
          <SkillTableTemplate data={mySkills}></SkillTableTemplate>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <SkillsByType></SkillsByType>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Skills_ByTechCategory></Skills_ByTechCategory>
        </TabPanel>
      </Container>

    </div>
  );
}

export default App;
