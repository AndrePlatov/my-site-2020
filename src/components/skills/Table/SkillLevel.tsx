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
    level: number
}


// TODO: replace tooltip with Popover https://material-ui.com/components/popover/
export default function SkillLevel(props: ISkillLevelProps) {
    let level = props.level;
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

    let content;
    switch (level) {
        case 1: {
            content = (
                <Box className="LevelBox">


                        <StyleRadio aria-owns={open ? 'mouse-over-popover-level-1' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose} checked={true} className="levelOne" />
                   
                        <StyleRadio 
                        aria-owns={open2 ? 'mouse-over-popover-level-2' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen2}
                        onMouseLeave={handlePopoverClose2} 
                        checked={false} className="levelTwo" />

                        <StyleRadio 
                        aria-owns={open3 ? 'mouse-over-popover-level-3' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen3}
                        onMouseLeave={handlePopoverClose3} 
                        checked={false} className="levelThree" />

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
            break;
        }
        case 2: {
            content = (
                <Box className="LevelBox">
                  

                  <StyleRadio aria-owns={open ? 'mouse-over-popover-level-1' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose} checked={true} className="levelOne" />
                   
                        <StyleRadio 
                        aria-owns={open2 ? 'mouse-over-popover-level-2' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen2}
                        onMouseLeave={handlePopoverClose2} 
                        checked={true} className="levelTwo" />

                        <StyleRadio 
                        aria-owns={open3 ? 'mouse-over-popover-level-3' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen3}
                        onMouseLeave={handlePopoverClose3} 
                        checked={false} className="levelThree" />

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
            break;
        }
        case 3: {
            content = (
                <Box className="LevelBox">
                    

                    <StyleRadio aria-owns={open ? 'mouse-over-popover-level-1' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose} checked={true} className="levelOne" />
                   
                        <StyleRadio 
                        aria-owns={open2 ? 'mouse-over-popover-level-2' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen2}
                        onMouseLeave={handlePopoverClose2} 
                        checked={true} className="levelTwo" />

                        <StyleRadio 
                        aria-owns={open3 ? 'mouse-over-popover-level-3' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen3}
                        onMouseLeave={handlePopoverClose3} 
                        checked={true} className="levelThree" />

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
            break;
        }

        default: {
            content = <div></div>;
            break;
        }

    }


    return content;
}


