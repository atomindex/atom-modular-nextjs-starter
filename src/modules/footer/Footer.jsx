import React from 'react';

class Footer extends React.Component {
    render() {
        let { state, actions } = this.props;
        let { messagesCount } = state;
        return (
            <div>
                <button onClick={actions.messages.incCount}>Увеличить</button>
                <button onClick={actions.messages.decCount}>Уменьшить</button>
                <div>[ПОДВАЛ]: Количество: { messagesCount }</div>
            </div>
        );
    }
}

export default Footer;