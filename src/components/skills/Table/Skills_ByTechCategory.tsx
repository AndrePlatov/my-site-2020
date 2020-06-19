import Chip from '@material-ui/core/Chip';
import * as React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { palette } from '@material-ui/system';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid, Box } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { ISkill, mySkills } from '../skillsData';
import SkillTableTemplate from './SkillsTableTemplate';
import { GenerateSkillsByTechTag } from './SkillsUtilities';
import SkillTableTemplateTech from './SkillsTableTemplateTech';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingBottom: "50px",
    },
    paper: {
      padding: theme.spacing(5),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      fontWeight: 700,
    },
  }),
);

export default function Skills_ByTechCategory() {
  let skills: ISkill[] = mySkills;

  let skillsByTag: any[];
  
  const classes = useStyles();

  skillsByTag = GenerateSkillsByTechTag(skills);
    
  let gridElements = skillsByTag.map(tagSkills => <Grid item xs>
    
      <h2>{tagSkills.type}</h2>
      
      <SkillTableTemplateTech data={tagSkills.skills} imagelink={tagSkills.imagelink}></SkillTableTemplateTech>
  </Grid>
  );


  //let content:JSX = 
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
          justify="center"
        >
          {gridElements}
        </Grid>

      </Container>
    </div>
  );
}