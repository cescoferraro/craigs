import * as React from "react";
import * as lodash from "lodash";
import { List, ListItem } from 'material-ui/List';
import { Add } from "./add-item";
export const AddsList = ({ adds }) => {
    return (
        <List>
            {Object.keys(adds).map((add: any) => {
                return <Add key={Math.random()} add={adds[add]} />
            })}
        </List>
    );
}
