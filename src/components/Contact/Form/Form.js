import React, {Component} from 'react';

import Message from '../../UI/Message/Message';

import './Form.scss';

const initialState = {
    fullName: "",
    email: "",
    message: "",
    messagePrompt: ""
}

class form extends Component {
    state = initialState;

    changeInputHandler = (e) => {
        switch(e.target.id) {
            case 'fullName':
                this.setState({fullName: e.target.value});
                break;
            case 'email':
                this.setState({email: e.target.value});
                break;
            default:
                this.setState({message: e.target.value});
                break;
        }
    }

    submitFormHandler = e => {
        const {fullName, email, message} = this.state;

        fetch('https://omer-b8879.firebaseio.com/.json', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                fullName, email, message, 
                time: new Date()
            }) 
        })
        .then(() => {
            this.setState({
                ...initialState,
                messagePrompt: 
                    <Message type="success">
                        Submitted successfully!
                    </Message>
            });
        })
        .catch(() => {
            this.setState({
                ...initialState,
                messagePrompt: 
                    <Message type="error">
                        Submission failed!
                    </Message>
            });
        }); 

        e.preventDefault();
    }

    render() {
        return (
            <form className="form" action="routing the user after submit"  onSubmit={e => this.submitFormHandler(e)}>
                <input type="text" className="form__input" placeholder="Full Name" id="fullName" onChange={e => this.changeInputHandler(e)} value={this.state.fullName} required />
                <input type="email" className="form__input" placeholder="Email" id="email" onChange={e => this.changeInputHandler(e)} value={this.state.email} required />
                <textarea className="form__textarea" placeholder="Your Message" id="message"  onChange={e => this.changeInputHandler(e)} value={this.state.message} required />
                <button className="form__button">Submit</button>
                {this.state.messagePrompt}
            </form>
        );
    }
}

export default form;