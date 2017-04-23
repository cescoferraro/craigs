import * as React from "react"
import { ModalComponent } from "./modal.component"
import { modal } from 'react-redux-modal' // The modal emitter
import FlatButton from 'material-ui/FlatButton';

export class ModalButton extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    addModal() {
        modal.add(ModalComponent, {
            title: 'Welcome to Craigs!',
            size: 'medium',
            closeOnOutsideClick: true,
            hideTitleBar: false,
            hideCloseButton: false
        });
    }

    render() {
        return <FlatButton label="LOGIN" onClick={this.addModal.bind(this)} />
    }
}
