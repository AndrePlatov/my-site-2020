import { Box, Popover, Typography, withStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as React from "react";
import Skill_Level_Unit, { ISkill_Level_UnitProps } from '../Skill-Level/Skill-Level-Unit';
import { ISkill } from '../skillsData';

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


