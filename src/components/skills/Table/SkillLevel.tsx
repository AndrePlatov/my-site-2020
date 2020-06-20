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
import { Grid, Box, Card, CardContent, Typography, CardMedia, withStyles, Tooltip, Popover } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { ISkill, mySkills } from '../skillsData';

import Radio from '@material-ui/core/Radio';
import { green, yellow } from '@material-ui/core/colors';
import Skill_Level_Unit, { ISkill_Level_UnitProps } from '../Skill-Level/Skill-Level-Unit';
import Skill_Level_Popover, { ISkill_Level_PopoverProps } from '../Skill-Level/Skill-Level-Popover';
const StyleRadio = withStyles({
    root: {
        padding: '0',
    }
})(Radio);


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        popover: {
            pointerEvents: 'none',
        },
        paper: {
            padding: theme.spacing(1),
        },
    }),
);



export interface ISkillLevelProps {
    skill: ISkill
}


// TODO: replace tooltip with Popover https://material-ui.com/components/popover/
export default function SkillLevel(props: ISkillLevelProps) {
    let level = parseInt(props.skill.level);
    let id = parseInt(props.skill.id);

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const [anchorEl2, setAnchorEl2] = React.useState<HTMLElement | null>(null);
    const [anchorEl3, setAnchorEl3] = React.useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const handlePopoverOpen2 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setAnchorEl2(event.currentTarget);
    };

    const handlePopoverClose2 = () => {
        setAnchorEl2(null);
    };
    const handlePopoverOpen3 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setAnchorEl3(event.currentTarget);
    };

    const handlePopoverClose3 = () => {
        setAnchorEl3(null);
    };

    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);
    const open3 = Boolean(anchorEl3);


    const levelOneProps: ISkill_Level_UnitProps = {
        skill_Level: level,
        unitLevel: 1,
        className: "levelOne",
        popoverIsOpen: open,
        popoverId: "mouse-over-popover-level-1",
        popoverOpenHandler: handlePopoverOpen,
        popoverCloseHandler: handlePopoverClose
    }

    const levelTwoProps: ISkill_Level_UnitProps = {
        skill_Level: level,
        unitLevel: 2,
        className: "levelTwo",
        popoverIsOpen: open2,
        popoverId: "mouse-over-popover-level-2",
        popoverOpenHandler: handlePopoverOpen2,
        popoverCloseHandler: handlePopoverClose2
    }

    const levelThreeProps: ISkill_Level_UnitProps = {
        skill_Level: level,
        unitLevel: 3,
        className: "levelThree",
        popoverIsOpen: open3,
        popoverId: "mouse-over-popover-level-3",
        popoverOpenHandler: handlePopoverOpen3,
        popoverCloseHandler: handlePopoverClose3
    }


    const levelOnePopoverProps: ISkill_Level_PopoverProps = {
        text: "Can find my way around",
        anchorElement: anchorEl,
        isOpen: open,
        id: "mouse-over-popover-level-1 " + id,
        openHandler: handlePopoverOpen,
        closeHandler: handlePopoverClose,
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'right',
        }
    };

    const levelTwoPopoverProps: ISkill_Level_PopoverProps = {
        text: "Quite familiar",
        anchorElement: anchorEl2,
        isOpen: open2,
        id: "mouse-over-popover-level-2 " + id,
        openHandler: handlePopoverOpen2,
        closeHandler: handlePopoverClose2,
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'center',
        }
    };

    const levelThreePopoverProps: ISkill_Level_PopoverProps = {
        text: "Easily solve complex problems",
        anchorElement: anchorEl3,
        isOpen: open3,
        id: "mouse-over-popover-level-3 " + id,
        openHandler: handlePopoverOpen3,
        closeHandler: handlePopoverClose3,
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
        }
    };



    let content;
    content = (
        <Box className="LevelBox">

            <Skill_Level_Unit {...levelOneProps} />
            <Skill_Level_Unit {...levelTwoProps} />
            <Skill_Level_Unit {...levelThreeProps} />

            <Popover
                id="mouse-over-popover-level-1"
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography>Can find my way around</Typography>
            </Popover>

            <Popover
                id="mouse-over-popover-level-2"
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={open2}
                anchorEl={anchorEl2}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onClose={handlePopoverClose2}
                disableRestoreFocus
            >
                <Typography>Quite familiar</Typography>
            </Popover>
            <Popover
                id="mouse-over-popover-level-3"
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={open3}
                anchorEl={anchorEl3}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose3}
                disableRestoreFocus
            >
                <Typography>Easily solve complex problems</Typography>
            </Popover>
        </Box>
    );

    return content;
}


