import * as React from "react";
import * as lodash from "lodash";
import { List, ListItem } from 'material-ui/List';
import { Add } from "./add-item";
export const AddsList = ({ searchAdds }) => {
    console.log(searchAdds)
    return (
        <div>
            <List>
                {searchAdds.length === 0 ?
                    <h2>Loading Adds</h2> : null}
                {searchAdds.map(add => (
                    <Add key={Math.random()} addObject={add}
                    />
                ))}
            </List>
        </div>
    );
}
