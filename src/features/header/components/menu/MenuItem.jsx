import React from 'react';
import Link from 'next/link';
import styles from '../../styles.scss';



class MenuItem extends React.PureComponent {
    render() {
        let { item } = this.props;
        return (
            <li className={styles.menuItem}>
                <Link href={item.href} as={item.as}>
                    <a>{ item.title }</a>
                </Link>
            </li>
        );
    }
}

export default MenuItem;