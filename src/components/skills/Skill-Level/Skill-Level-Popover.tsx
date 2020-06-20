import { Popover, Radio, withStyles, Typography, makeStyles, createStyles, Theme } from "@material-ui/core";
import React from "react";

export interface ISkill_Level_PopoverProps {
    text: string,
    anchorElement: any,
    isOpen: boolean,
    id: string,
    openHandler: any,
    closeHandler: any,
    anchorOrigin: any,
    transformOrigin: any
}

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



// TODO: replace tooltip with Popover https://material-ui.com/components/popover/
export default function Skill_Level_Popover(props: ISkill_Level_PopoverProps) {
    const classes = useStyles();

    debugger
    let content;
    content = (
        <Popover
            id={props.id}
            className={classes.popover}
            classes={{ paper: classes.paper, }}
            open={props.openHandler}
            anchorEl={props.anchorElement}
            anchorOrigin={props.anchorOrigin}
            transformOrigin={props.transformOrigin}
            onClose={props.closeHandler}
            disableRestoreFocus
        >
            <Typography>{props.text}</Typography>
        </Popover>
    );


    return content;

}

