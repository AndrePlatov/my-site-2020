import { Box, Paper } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as React from "react";
import { ISkill } from '../skillsData';
import SkillCategoryIcon from './SkillCategoryIcon';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        table: {
            minWidth: 250,
        },
        chip: {
            margin: "2px",
        },
    })
);


export interface ISkillTableProps {
    data: ISkill[];
}

export default function SkillTableTemplate(props: ISkillTableProps) {
    const classes = useStyles();
    let skills: ISkill[] = props.data;


    return (
        <Container maxWidth="md" >
            <Box m="20px">
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow className="bg-black">
                                <TableCell align="right">Skill</TableCell>
                                <TableCell >Tags</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                skills.map(skill => (
                                    <TableRow key={skill.name}>
                                        <TableCell align="right" component="th" scope="row">
                                            {skill.name}
                                        </TableCell>
                                        <TableCell >
                                            {
                                                skill.tags.split(",").map(tag => (
                                                    <SkillCategoryIcon tagName={tag}/>
                                                ))
                                            }
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
}
