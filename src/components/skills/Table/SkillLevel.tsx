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
import { Grid, Box, Card, CardContent, Typography, CardMedia, withStyles } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { ISkill, mySkills } from '../skillsData';

import Radio from '@material-ui/core/Radio';
import { green, yellow } from '@material-ui/core/colors';
const StyleRadio = withStyles({
    root: {
        padding: '0',
    }
})(Radio);

export interface ISkillLevelProps {
    level: number
}

export default function SkillLevel(props: ISkillLevelProps) {
    let level = props.level;

    let content;
    switch (level) {
        case 1: {
            content = (
                <Box className="LevelBox">
                    <StyleRadio checked={true} className="levelOne" />
                    <StyleRadio checked={false} className="levelTwo" />
                    <StyleRadio checked={false} className="levelThree" />
                </Box>
            );
            break;
        }
        case 2: {
            content = (
                <Box className="LevelBox">
                <StyleRadio checked={true} className="levelOne" />
                    <StyleRadio checked={true} className="levelTwo" />
                    <StyleRadio checked={false} className="levelThree" />
                </Box>
            );
            break;
        }
        case 3: {
            content = (
                <Box className="LevelBox">
                <StyleRadio checked={true} className="levelOne" />
                    <StyleRadio checked={true} className="levelTwo" />
                    <StyleRadio checked={true} className="levelThree" />
                </Box>
            );
            break;
        }

        default: {
            content = <div></div>;
            break;
        }

    }


    return content;
}


