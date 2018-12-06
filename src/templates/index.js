import React, {PureComponent} from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import ModalForm from '../components/modal-form';

const StyledModalOverflow = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.7);
`;

const StyledModal = styled.div`
    width: 800px;
`;

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
        const {locale} = this.props.pageContext;

        return (
            <Layout locale={locale}>
                <h1>{locale === 'ru' ? 'Это домашняя страница' : 'Hi, this is Home page with'}</h1>
                <p>
                    <button
                        onClick={this.showForm}
                    >
                        {locale === 'ru' ? 'Открыть форму' : 'Open Form in Modal'}
                    </button>
                </p>
                <div style={{ display: formIsVisible ? 'block' : 'none'}}>
                    <StyledModalOverflow>
                        <StyledModal>
                            <ModalForm
                                onClose={this.closeForm}
                             />
                        </StyledModal>
                    </StyledModalOverflow>
                </div>
            </Layout>
        );
    }
}

export default IndexPage;
