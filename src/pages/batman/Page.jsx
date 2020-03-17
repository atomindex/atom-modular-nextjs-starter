import React from 'react';
import Link from 'next/link';
import reduxPage from '@lib/redux/page';
import reducers from './redux/reducers';
import actions from './redux/actions';
import getInitialState from './redux/state';

import SimpleLayout from '~/layouts/simple/Simple';




class Page extends React.Component {
    render() {
        console.log('BATMAN render', this.props);
        let { header, footer, page, actions } = this.props;
        let { shows } = page;
        return (
            <SimpleLayout header={header} footer={footer} actions={actions}>
                <ul>
                    {
                        shows.map(show => (
                            <li key={show.id}>
                                <Link href="/batman/[id]" as={`/batman/${show.id}`}>
                                    <a>{show.name}</a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </SimpleLayout>
        );
    }
}

export default reduxPage({
    reducers,
    actions,
    getInitialState
})(Page);