import React, {Component} from 'react';

import './Message.scss';

class Message extends Component {
    state = {
        class: `message ${this.props.type}`
    }

    componentDidMount() {
        setTimeout(() => this.setState({class: 'hide'}), 3000);
    }

    render() {
        return(
            <div className={this.state.class}>
                {this.props.children}
            </div>
        )
    }
}

export default Message;