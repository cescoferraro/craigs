import * as React from "react";
import { connect } from "react-redux"
import { APP_ACTIONS } from "../../store/actions";
import { Add } from "../home/components/add-item";
import ContentAdd from 'material-ui/svg-icons/content/add';
import Refresh from 'material-ui/svg-icons/navigation/refresh';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Switch, Route } from "react-router-dom";
import { StyleConnect } from "../../shared/components/StyleConnect/index";
import { DashboardStyle } from "./css/style";
import { AddAdd } from "./components/add.add";
import ReduxModal from 'react-redux-modal'
import { DashboardTab } from "./components/tabs/tabs";

@StyleConnect(DashboardStyle)
@connect(({ OwnAddsReducer }) => ({
    OwnAddsReducer: OwnAddsReducer
}), APP_ACTIONS)
export class Dashboard extends React.Component<any, any>{
    constructor(props) {
        super(props)
        this.getAdds()
    }

    getAdds() {
        this.props.OWN_ADDS()
    }

    render() {

        return <div>
            <Switch>
                <DashboardTab>
                    <Route exact path="/dashboard/adds"
                        render={() => {
                            return <div>


                                <FloatingActionButton
                                    onClick={this.getAdds.bind(this)}
                                    secondary={true}
                                    className={DashboardStyle.refresh}>
                                    <Refresh />
                                </FloatingActionButton>
                                <AddAdd
                                    customStyle={DashboardStyle.add}
                                ></AddAdd>
                                {Object.keys(this.props.OwnAddsReducer).map(
                                    each => (<Add
                                        key={Math.random()}
                                        addObject={this.props.OwnAddsReducer[each]} />))}
                            </div>
                        }}
                    />
                </DashboardTab>
            </Switch>

            <ReduxModal />

        </div>
    }
}
