import { Box, Card, CardContent, CardMedia, Divider, Typography, withStyles } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as React from "react";
import { ISkill } from '../skillsData';
import SkillLevel from './SkillLevel';

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


