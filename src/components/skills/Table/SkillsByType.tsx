import { Grid, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as React from "react";
import { ISkill, mySkills } from '../skillsData';
import SkillTableTemplate from './SkillsTableTemplate';
import { GenerateSkillsByTag } from './SkillsUtilities';

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
export function capital_letter(str: any) {
  str = str.split(" ");

  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

  return str.join(" ");
}
export default function SkillsByType() {
  let skills: ISkill[] = mySkills;

  let skillsByTag: any[];

  const classes = useStyles();

  skillsByTag = GenerateSkillsByTag(skills);

  let gridElements = skillsByTag.map(tagSkills => <Grid item xs>

    <Typography variant="h4">
      {capital_letter(tagSkills.type)}
    </Typography>
    <SkillTableTemplate data={tagSkills.skills}></SkillTableTemplate>
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

