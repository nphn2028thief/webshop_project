import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import MobileMenu from '~/components/MobileMenu';
import { navMenus } from '~/data';
import Search from '../Search';
import Logo from '~/components/Logo';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container', 'header-container')}>
                <MobileMenu />

                <div className={cx('menu')}>
                    {navMenus.map((navMenu) => (
                        <Link key={navMenu.id} to={navMenu.to} className={cx('menu-item')}>
                            {navMenu.name}
                        </Link>
                    ))}
                </div>

                <Logo className={cx('logo')} />

                <div className={cx('actions')}>
                    <Search />

                    <div className={cx('action-item')}>
                        <Link to="/cart" className={cx('action-icon')}>
                            <i className="bx bx-shopping-bag"></i>
                            <span className={cx('count-cart')}>99+</span>
                        </Link>
                    </div>

                    <div className={cx('action-item')}>
                        <Image src="" className={cx('avatar')} alt="avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;