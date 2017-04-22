import * as React from 'react'
import { modal } from 'react-redux-modal' // The modal emitter

class myModalComopnent extends React.Component<any, any> {
    constructor(props) {
        super(props);
        console.log('## MODAL DATA AND PROPS:', this.props);
    }

    removeThisModal() {
        this.props.removeModal();
    }

    render() {
        return (
            <div>
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
export class YourComponent extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    addModal() {
        modal.add(myModalComopnent, {
            title: 'This is my modal',
            size: 'medium',
            closeOnOutsideClick: false,
            hideTitleBar: false,
            hideCloseButton: false
        });
    }

    render() {
        return <button onClick={this.addModal.bind(this)}>Add modal</button>;
    }
}
