import * as React from "react";
import * as PropTypes from 'prop-types';


export class UniversalStyleProvider extends React.Component<any, any> {
    static propTypes = {
        children: PropTypes.element.isRequired,
        onInsertCss: PropTypes.func.isRequired,
    };

    static childContextTypes = {
        insertCss: PropTypes.func.isRequired,
    };

    getChildContext() {
        return { insertCss: this.props.onInsertCss };
    }

    render() {
        return React.Children.only(this.props.children);
    }
}
