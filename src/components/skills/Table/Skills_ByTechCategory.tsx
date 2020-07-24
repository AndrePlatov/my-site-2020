import { Grid, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as React from "react";
import { ISkill, mySkills } from '../skillsData';
import SkillTableTemplateTech from './SkillsTableTemplateTech';
import { GenerateSkillsByTechTag } from './SkillsUtilities';
import { capital_letter } from './SkillsByType';

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
    <Typography variant="h4">
      {capital_letter(tagSkills.type)}
    </Typography>

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