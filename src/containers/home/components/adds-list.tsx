import * as React from "react";
import * as lodash from "lodash";
import { List, ListItem } from 'material-ui/List';
import { Add } from "./add-item";
export const AddsList = ({ searchAdds}) => {
    console.log(searchAdds)
    return (
        <div>
            <h1>
                {searchAdds.map(add => (
                    <div key={Math.random()}>
                        <h2>{add.title}</h2>
                    </div>
                ))}
            </h1>
        </div>
    );
}
