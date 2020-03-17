import React from 'react';
import styles from './styles.scss';
import Menu from './components/menu/Menu';

class Header extends React.Component {
    render() {
        let { state } = this.props;
        let { menu } = state;

        return (
            <div className={styles.header}>
                <Menu menu={menu} />
            </div>
        );
    }
}

export default Header;