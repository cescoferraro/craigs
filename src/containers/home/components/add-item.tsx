import * as React from "react";
import * as lodash from "lodash";
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

export const Add = ({ addObject }: { addObject: add }) => {
    return (

        <ListItem
            leftAvatar={<Avatar src="http://thecatapi.com/api/images/get?format=src&type=gif" />}
            primaryText={addObject.title}
            secondaryText={addObject.description}
        >
            <Chip
            >
                Text Chip
        </Chip> </ListItem>);
}
