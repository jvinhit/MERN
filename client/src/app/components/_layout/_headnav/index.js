import React from 'react';
import { routerConfig } from '../../../routes/config';
import './index.scss';
import NavItem from './navItem';

const headNav = React.memo(() => {
    const renderNavItem = () =>
        Object.keys(routerConfig).map(itemKey => {
            const { name, path, key } = routerConfig[itemKey];
            return <NavItem key={key} title={name} path={path} />;
        });

    return (
        <nav className="nav-top">
            <ul className="nav-top__list">
                <li className="nav-top__item align-logo">
                    <span className="logo">
                        <span className="text">Fossil</span>
                    </span>
                </li>
                <div className="right">{renderNavItem()}</div>
            </ul>
        </nav>
    );
});

headNav.propTypes = {};
export default headNav;
