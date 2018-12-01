import React, {PureComponent} from 'react';
import Modal from 'react-modal';
import Layout from '../components/layout';
import ModalForm from '../components/modal-form';

class IndexPage extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            formIsVisible: false
        }

        this.showForm = this.showForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }

    showForm() {
        this.setState({formIsVisible: true});
    }

    closeForm() {
        this.setState({formIsVisible: false});
    }

    render() {
        const {formIsVisible} = this.state;

        return (
            <Layout>
                <h1>Hi, this is Home page</h1>
                <p>Welcome Home :)</p>
                <p>
                    <button
                        onClick={this.showForm}
                    >
                        Open Form in Modal
                    </button>
                </p>
                <Modal
                    isOpen={formIsVisible}
                    onRequestClose={this.closeForm}
                >
                    <ModalForm />
                </Modal>
            </Layout>
        );
    }
}

export default IndexPage;
