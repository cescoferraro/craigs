import * as React from "react";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { AddsList } from "./adds-list";
import { AddSearch } from "./adds-search";

export const FirebaseLoader = ({ adds }) => {
    return (!isLoaded(adds)
        ? <h2>'We Are loading all the adds....'</h2>
        : isEmpty(adds)
            ? <h2>'Todo list is empty'</h2> :
            <div>
                <AddSearch />
                <AddsList adds={adds} />
            </div>)
}
