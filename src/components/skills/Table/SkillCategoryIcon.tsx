import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileCode as faFileCodeReg } from '@fortawesome/free-regular-svg-icons';
import { faBook, faBriefcase, faCode, faCoffee, faDatabase, faDragon, faGuitar, faLaptopCode, faProjectDiagram, faRocket, faToolbox, faUser, faWrench, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from "@material-ui/core";
import * as React from "react";

export interface ISkillCategoryIconProps {
    tagName: string;
}


const tagIcons = new Map<string, IconDefinition>([
    ["quality", faUser],
    ["methodology", faProjectDiagram],
    ["tool", faWrench],
    ["knowledge", faBook],
    ["experience", faBriefcase],
    ["ability", faDragon],
    ["programming language", faCode],
    ["styling language", faLaptopCode],
    ["r&d", faRocket],
    ["tech library", faToolbox],
    ["hobby", faGuitar],
    ["software", faUser],
    ["quering language", faDatabase]
]);

library.add(
    faFileCodeReg
);

export default function SkillCategoryIcon(props: ISkillCategoryIconProps) {
    let tagName = props.tagName.toLocaleLowerCase().trim();

    let faIcon = tagIcons.get(tagName) || faCoffee;
    // if (tagName == "programming language") {

    //     //faIcon = fileCodeIconDefinition || faCoffee;
        
    //     return (
    //         <Box className="tagIconBox" display="inline" m="2px">
    //             <FontAwesomeIcon icon={["far", "file-code"]} size="lg" />
    //         </Box>
    //     );
    // }

    return (
        <Box className="tagIconBox" display="inline" m="2px">
            <FontAwesomeIcon icon={faIcon} size="lg" color="rgba(0,0,0,0.14)" />
        </Box>
    );
}