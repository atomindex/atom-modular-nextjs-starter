import React from 'react';

class Footer extends React.Component {
    render() {
        let { state, actions } = this.props;
        let { messagesCount } = state || {};
        console.log({ state, actions });
        return (
            <div>
                <button onClick={actions.messagesIncCount}>Увеличить</button>
                <button onClick={actions.messagesDecCount}>Уменьшить</button>
                <div>[ПОДВАЛ]: Количество: { messagesCount }</div>
            </div>
        );
    }
}

export default Footer;