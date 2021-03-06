import { Box } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import * as React from "react";
import SkillsGrid from "./SkillsGrid";


interface SkillsNavigatorState { filter: string };


export class SkillsNavigator extends React.Component<{}, SkillsNavigatorState> {
    constructor() {
        super({});
        this.state = { filter: '' };
    }

    handleSubmit = () => { }

    handleChange = (event: any) => {
        this.setState({ filter: event.target.value });

    }


    render() {
        return <div>
            <Box mb="17px">
                <TextField id="standard-basic" label="Search" value={this.state.filter} onChange={this.handleChange} />
            </Box>


            <SkillsGrid filter={this.state.filter} ></SkillsGrid>
        </div>;
    }
}
