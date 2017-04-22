import * as React from 'react'
import { modal } from 'react-redux-modal' // The modal emitter
import { ModalStyle } from "../css/style"
import { StyleConnect } from "../../../shared/components/StyleConnect"




@StyleConnect(ModalStyle)
export class ModalComponent extends React.Component<any, any> {
    constructor(props) {
        super(props);
        console.log('## MODAL DATA AND PROPS:', this.props);
    }

    removeThisModal() {
        this.props.removeModal();
    }

    render() {
        return (
            <div className={ModalStyle.modal}>
                <p>this is my modal</p>
                <button
                    type="button"
                    onClick={this.removeThisModal.bind(this)}>
                    close this modal
        </button>
            </div>
        );
    }
}
