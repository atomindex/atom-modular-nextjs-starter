import React from 'react';
import Header from '~/features/header/Header';
import Footer from '~/features/footer/Footer';

class Simple extends React.Component {
    render() {
        let { header, footer, children, actions } = this.props;
        return (
            <div className="simple-layout">
                <Header state={header} actions={actions.header} />
                <div>{ children }</div>
                <Footer state={footer} actions={actions.footer} />
            </div>
        );
    }
}

export default Simple;