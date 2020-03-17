import React from 'react';
import styles from '../../styles.scss';
import MenuItem from './MenuItem';



class Menu extends React.PureComponent {
    render() {
        let { menu } = this.props;
        return (
            <ul className={styles.menu}>
                {
                    menu.map((item, i) => (
                        <MenuItem key={i} item={item} />
                    ))
                }
            </ul>
        );
    }
}

export default Menu;