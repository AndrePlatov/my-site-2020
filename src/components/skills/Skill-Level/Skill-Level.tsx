import { Box, Popover, Typography, withStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as React from "react";
import Skill_Level_Unit from './Skill-Level_Unit';
import Skill_Level_Popover, { ISkill_Level_PopoverProps } from './Skill-Level-Popover';
import Skill_Level_Rating, { ISkill_Level_RatingProps } from './Skill-Level-Rating';
import { ISkill } from '../skillsData';

const StyleRadio = withStyles({
    root: {
        padding: '0',
    }
})(Radio);





export interface ISkillLevelProps {
    skill: ISkill
}


// TODO: replace tooltip with Popover https://material-ui.com/components/popover/
export default function SkillLevel(props: ISkillLevelProps) {
    let level = props.skill.level;

    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const [anchorEl2, setAnchorEl2] = React.useState<HTMLElement | null>(null);
    const [anchorEl3, setAnchorEl3] = React.useState<HTMLElement | null>(null);

    const handleLevelOnePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLevelOnePopoverClose = () => {
        setAnchorEl(null);
    };
    const handleLevelTwoPopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleLevelTwoPopoverClose = () => {
        setAnchorEl2(null);
    };
    const handleLevelThreePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setAnchorEl3(event.currentTarget);
    };

    const handleLevelThreePopoverClose = () => {
        setAnchorEl3(null);
    };

    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);
    const open3 = Boolean(anchorEl3);

    let content;

    const levelOneRatingProps: ISkill_Level_RatingProps = {
        skill: props.skill,
        popoverLevelOneOpenHandler: handleLevelOnePopoverOpen,
        popoverLevelOneCloseHandler: handleLevelOnePopoverClose,
        popoverLevelTwoOpenHandler: handleLevelTwoPopoverOpen,
        popoverLevelTwoCloseHandler: handleLevelTwoPopoverClose,
        popoverLevelThreeOpenHandler: handleLevelThreePopoverOpen,
        popoverLevelThreeCloseHandler: handleLevelThreePopoverClose,
        isLevelOnePopoverOpen: open,
        isLevelTwoPopoverOpen: open2,
        isLevelThreePopoverOpen: open3

    };

    const levelOnePopoverProps: ISkill_Level_PopoverProps = {
        text: "Can find my way around",
        anchorElement: anchorEl,
        isOpen: open,
        id: "mouse-over-popover-level-1" + props.skill.name,
        openHandler: handleLevelOnePopoverOpen,
        closeHandler: handleLevelOnePopoverClose,
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
        id: "mouse-over-popover-level-2" + props.skill.name,
        openHandler: handleLevelTwoPopoverOpen,
        closeHandler: handleLevelTwoPopoverClose,
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
        id: "mouse-over-popover-level-3" + props.skill.name,
        openHandler: handleLevelThreePopoverOpen,
        closeHandler: handleLevelThreePopoverClose,
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
        }
    };


    //debugger
    content = (
        <Box className="LevelBox">
            <Skill_Level_Rating {...levelOneRatingProps} />

            <Skill_Level_Popover {...levelOnePopoverProps} />
            <Skill_Level_Popover {...levelTwoPopoverProps} />
            <Skill_Level_Popover {...levelThreePopoverProps} />
        </Box>
    );

    return content;
}


