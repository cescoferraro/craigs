import * as React from "react";
import * as lodash from "lodash";
import { List, ListItem } from 'material-ui/List';


export const Add = ({ add }: { add: add }) => {
    return (
        <ListItem
            primaryText={add.title}
            secondaryText={add.description}
        />
    );
}
