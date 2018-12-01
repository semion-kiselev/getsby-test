import React, {PureComponent} from 'react';
import styled from 'styled-components';

const StyledLabel = styled.span`
    display: block;
`;

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class ModalForm extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange(fieldName) {
        return (e) => {
            this.setState({
                [fieldName]: e.target.value
            });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const formData = encode({ 'form-name': 'userFullName', ...this.state });
        // const formData = encode(this.state);
        console.log(formData);

        fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData
        })
    }

    render() {
        const {firstName, lastName} = this.state;

        return (
            <form name="userFullName" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <p>
                    <StyledLabel htmlFor="firstName">First Name:</StyledLabel>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={this.onInputChange('firstName')}
                    />
                </p>
                <p>
                    <StyledLabel htmlFor="lastName">Last Name:</StyledLabel>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={this.onInputChange('lastName')}
                    />
                </p>
                <p>
                    <button type="submit" onClick={this.onSubmit}>
                        Send
                    </button>
                </p>
            </form>
        );
    }
}

export default ModalForm;
