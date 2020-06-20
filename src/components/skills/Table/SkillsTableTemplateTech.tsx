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
import { Grid, Box, Card, CardContent, Typography, CardMedia, withStyles, Divider } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { ISkill, mySkills } from '../skillsData';

import Radio, { RadioProps } from '@material-ui/core/Radio';
import SkillLevel from '../Skill-Level/Skill-Level';
const StyleRadio = withStyles({
    root: {
        padding: '0',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Radio);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minWidth: 250,
        },
        chip: {
            margin: "2px",
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
        media: {
            height: 140,
        },
    })
);


export interface ISkillTableProps {
    data: ISkill[];
    imagelink: string;
}

export default function SkillTableTemplateTech(props: ISkillTableProps) {
    const classes = useStyles();
    let skills: ISkill[] = props.data;

    let sortedSkills: ISkill[] = skills.sort((a: ISkill, b: ISkill) => {
        if (a.level > b.level) {
            return -1;
        }
        if (a.level < b.level) {
            return 1;
        }
        return 0;
    });


    return (
        <Container maxWidth="md" >
            <Box m="20px">


                <Card className={classes.root} variant="outlined">
                    <CardMedia
                        className={classes.media}
                        image={props.imagelink}
                        title="Contemplative Reptile"
                    />
                    <CardContent>

                        <Typography variant="body2" component="p">
                            {
                                sortedSkills.map(skill => (
                                    <Box m={3}>
                                        <Chip
                                            label={skill.name}
                                            className={classes.chip}
                                        />

                                        <SkillLevel skill={skill} />

                                        <Divider className="Skill" />
                                    </Box>

                                ))}
                        </Typography>
                    </CardContent>
                </Card>



            </Box>
        </Container>
    );
}


