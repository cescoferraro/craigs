import * as React from "react";
import {List, ListItem} from "material-ui/List";
import {grey400, darkBlack, lightBlack} from "material-ui/styles/colors";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import {firebaseConnect, isLoaded, isEmpty, dataToJS} from "react-redux-firebase";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import Avatar from "material-ui/Avatar";
import * as HammerComponent from "react-hammerjs";


export const JobItem = ({job, DELETE_JOB, SET_FORM_MODE, ID, SHOW_JOBS_MODAL, SET_EDITING_JOB}) => {
    let subtitle = (
        <span style={{color: darkBlack}}>
                {job.subtitle}
            </span>
    );
    let title = (
        <span style={{color: darkBlack}}>
                {job.title}
            </span>
    );
    const openModal = () => {
        SET_FORM_MODE("update");
        SET_EDITING_JOB(ID, job);
        SHOW_JOBS_MODAL(true);
    };
    const GODelete = () => {
        console.info("DELETEING " + ID);
        DELETE_JOB(ID);
    };

    return (
        <HammerComponent onPress={openModal}>
            <ListItem key={Math.random()}
                      leftAvatar={<Avatar src={job.image}/>}
                      rightIconButton={rightIconMenu(openModal,GODelete)}
                      primaryText={job.company}
                      secondaryText={<Text2  job={job}/>}
                      secondaryTextLines={2}/>
        </HammerComponent>
    )
};


let Text2 = ({job}) => {
    return (
        <p>
            <span style={{color: darkBlack}}> {job.title}</span>
            <br/>
            <span style={{color: darkBlack}}>{job.subtitle}</span>
            <br/>{job.url}
        </p>
    )
};


const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left">
        <MoreVertIcon color={grey400}/>
    </IconButton>
);

const rightIconMenu = (openModal, GODelete) => (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem onClick={openModal}>
            Edit
        </MenuItem>
        <MenuItem onClick={GODelete}>
            Remove
        </MenuItem>
    </IconMenu>
);
