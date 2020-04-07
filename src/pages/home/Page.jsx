import React from 'react';

import reduxPage from '@lib/redux/page';
import slices from './redux/slices';
import getInitialState from './redux/state';

import SimpleLayout from '~/layouts/simple/Simple';



class Page extends React.Component {
    render() {
        console.log('HOME render', this.props);
        let { header, footer, actions } = this.props;
        return (
            <SimpleLayout header={header} footer={footer} actions={actions}>
                <div>Hello world</div>
            </SimpleLayout>
        );
    }
}

export default reduxPage({
    slices,
    getInitialState
})(Page);