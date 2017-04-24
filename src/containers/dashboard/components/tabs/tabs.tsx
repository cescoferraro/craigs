import * as React from "react";
import { Tabs, Tab } from "material-ui/Tabs";
import SwipeableViews from "react-swipeable-views";
import FaceIcon from "material-ui/svg-icons/action/face.js";
import InboxIcon from "material-ui/svg-icons/content/inbox.js";
import SettingsIcon from "material-ui/svg-icons/action/settings.js";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { withRouter } from "react-router";
const css = require("./tabs.pcss");

@withRouter
@withStyles(css)
@connect(state => ({
    app: state.app
}))
export class DashboardTab extends React.Component<any, any> {
    state = {
        slideIndex: 0,
    };

    componentWillMount() {
        console.log(this.props)
        switch (this.props.computedMatch.url) {
            case "/dashboard/adds":
                this.setState({
                    slideIndex: 0,
                });
                break;
            case "/dashboard/blog":
                this.setState({
                    slideIndex: 1,
                });
                break;
        }
    }

    handleChange(value) {
        this.setState({
            slideIndex: value,
        },
            () => {
                switch (value) {
                    case 0:
                        this.props.dispatch(push("/dashboard/adds"));
                        break;
                    case 1:
                        this.props.dispatch(push("/dashboard/blog"));
                        break;
                }
            }
        );

    }

    render() {
        return (
            <div id="tabs"
                className={css.container}>
                <Tabs
                    className={css.tabs}
                    onChange={this.handleChange.bind(this)}
                    value={this.state.slideIndex}>

                    <Tab
                        icon={<InboxIcon />}
                        label="ADDS"
                        value={0}
                    />
                    <Tab icon={<FaceIcon />} label="BLOG" value={1} />
                </Tabs>
                <SwipeableViews
                    className={css.container}
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange.bind(this)}>
                    {this.props.children}
                </SwipeableViews>
            </div>
        );
    }
}
