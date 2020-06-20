import { Radio, withStyles, Box } from "@material-ui/core";
import React from "react";

export interface ISkill_Level_UnitProps {
    skill_Level: number,
    unitLevel: number,
    className: string,
    popoverIsOpen: boolean,
    popoverId: string,
    popoverOpenHandler: any,
    popoverCloseHandler: any
}
const StyleRadio = withStyles({
    root: {
        padding: '0',
    }
})(Radio);



// TODO: replace tooltip with Popover https://material-ui.com/components/popover/
export default function Skill_Level_Unit(props: ISkill_Level_UnitProps) {
 
    let content;
    content = (

            <StyleRadio
                        aria-owns={props.popoverIsOpen ? props.popoverId : undefined}
                        aria-haspopup="true"
                        onMouseEnter={props.popoverOpenHandler}
                        onMouseLeave={props.popoverCloseHandler} 
                checked={props.skill_Level >= props.unitLevel}
                className={props.className}
            />
    );

    return content;
}

