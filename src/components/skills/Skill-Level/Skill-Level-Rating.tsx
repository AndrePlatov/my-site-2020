import { Radio, withStyles, Box } from "@material-ui/core";
import React from "react";
import Skill_Level_Unit, { ISkill_Level_UnitProps } from "./Skill-Level_Unit";
import { ISkill } from "../skillsData";

export interface ISkill_Level_RatingProps {
    skill: ISkill,
    popoverLevelOneOpenHandler: any,
    popoverLevelOneCloseHandler: any,
    popoverLevelTwoOpenHandler: any,
    popoverLevelTwoCloseHandler: any,
    popoverLevelThreeOpenHandler: any,
    popoverLevelThreeCloseHandler: any,
    isLevelOnePopoverOpen: boolean,
    isLevelTwoPopoverOpen: boolean,
    isLevelThreePopoverOpen: boolean
}
const StyleRadio = withStyles({
    root: {
        padding: '0',
    }
})(Radio);



// TODO: replace tooltip with Popover https://material-ui.com/components/popover/
export default function Skill_Level_Rating(props: ISkill_Level_RatingProps) {

    
let skill_Level = parseInt(props.skill.level);

    const levelOneProps: ISkill_Level_UnitProps = {
        skill_Level: skill_Level,
        unitLevel: 1,
        className: "levelOne",
        popoverIsOpen: props.isLevelOnePopoverOpen,
        popoverId: "mouse-over-popover-level-1",
        popoverOpenHandler: props.popoverLevelOneOpenHandler,
        popoverCloseHandler: props.popoverLevelOneCloseHandler
    }

    const levelTwoProps: ISkill_Level_UnitProps = {
        skill_Level: skill_Level,
        unitLevel: 2,
        className: "levelTwo",
        popoverIsOpen: props.isLevelTwoPopoverOpen,
        popoverId: "mouse-over-popover-level-2",
        popoverOpenHandler: props.popoverLevelTwoOpenHandler,
        popoverCloseHandler: props.popoverLevelTwoCloseHandler
    }

    const levelThreeProps: ISkill_Level_UnitProps = {
        skill_Level: skill_Level,
        unitLevel: 3,
        className: "levelThree",
        popoverIsOpen: props.isLevelThreePopoverOpen,
        popoverId: "mouse-over-popover-level-3",
        popoverOpenHandler: props.popoverLevelThreeOpenHandler,
        popoverCloseHandler: props.popoverLevelThreeCloseHandler
    }


    let content;
    content = (
        <Box className="LevelBox">

            <Skill_Level_Unit {...levelOneProps} />

            <Skill_Level_Unit {...levelTwoProps} />

            <Skill_Level_Unit {...levelThreeProps} />

            

        </Box>
    );


    return content;

}

