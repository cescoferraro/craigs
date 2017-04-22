import * as React from "react"
import { ModalComponent } from "./modal.component"
import { modal } from 'react-redux-modal' // The modal emitter
export class ModalButton extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    addModal() {
        modal.add(ModalComponent, {
            title: 'This is my modal',
            size: 'medium',
            closeOnOutsideClick: true,
            hideTitleBar: false,
            hideCloseButton: false
        });
    }

    render() {
        return <button onClick={this.addModal.bind(this)}>Add modal</button>;
    }
}
