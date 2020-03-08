import * as React from "react";
import { mySkills } from "./skillsData";
import { palette } from '@material-ui/system';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid, Box } from '@material-ui/core';
import { Paper } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      fontWeight: 700,
    },
  }),
);


interface SkillsGridProps {
  filter: string

}

export default function SkillsGrid(props:SkillsGridProps) {
  const classes = useStyles();
let skills: string[];
 props.filter.length>0 ? 
  
   skills =  mySkills.filter(skill => skill.toLowerCase().includes(props.filter.toLowerCase())) : 
   skills = mySkills;

  let skillsList = skills.map(skill => <Grid item xs >
    <Paper className={classes.paper + " andre-color-" + skill.length%16} >{skill}</Paper>
  </Grid>);

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid
          container
          spacing={3}
          justify="center"
        >
          {skillsList}
        </Grid>
       
      </Container>
    </div>
  );
}
