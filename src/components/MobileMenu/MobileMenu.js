import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { BiShoppingBag } from 'react-icons/bi';

import { navMenus } from '~/data';
import styles from './MobileMenu.module.scss';
import Image from '../Image';
import { useStore } from '~/hooks';
import { setIsLogin } from '~/store/actions';

const cx = classNames.bind(styles);

function MobileMenu() {
    const [width, setWidth] = useState(window.innerWidth);
    const checkboxRef = useRef();
    const contentRef = useRef();
    const { pathname } = useLocation();

    const active = navMenus.findIndex((e) => e.to === pathname);

    const [state, dispatch] = useStore();
    const { isLogin, countProductInCart } = state;

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);

            if (width > 1149) {
                checkboxRef.current.checked = false;
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [width]);

    const handleLogout = () => {
        dispatch(setIsLogin(false));
        checkboxRef.current.checked = false;
    };

    return (
        <>
            <label className={cx('menu-btn')} htmlFor={styles['mobile-menu-input']}>
                <i className="bx bx-menu-alt-left"></i>
            </label>

            <input ref={checkboxRef} type="checkbox" id={cx('mobile-menu-input')} />

            <label htmlFor={styles['mobile-menu-input']} className={cx('overlay')}></label>

            <div ref={contentRef} className={cx('content')}>
                {isLogin && (
                    <div className={cx('info')}>
                        <Image src="" className={cx('avatar')} alt="avatar" />
                        <h6 className={cx('name')}>Nguyễn Nhân</h6>
                    </div>
                )}

                <div className={cx('menu-list-wrap')}>
                    {isLogin ? (
                        <div className={cx('menu')}>
                            <Link
                                to="/cart"
                                className={cx('menu-item')}
                                onClick={() => (checkboxRef.current.checked = false)}
                            >
                                <BiShoppingBag size="20" />
                                Giỏ hàng của tôi ({countProductInCart})
                            </Link>
                        </div>
                    ) : (
                        <div className={cx('menu')}>
                            <Link to="/account/login" className={cx('menu-item')}>
                                <FiLogIn size="20" />
                                Đăng nhập
                            </Link>
                        </div>
                    )}

                    <div className={cx('menu')}>
                        {navMenus.map((navMenu) => (
                            <Link
                                key={navMenu.id}
                                to={navMenu.to}
                                className={navMenu.id === active + 1 ? cx('menu-item', 'active') : cx('menu-item')}
                                onClick={() => (checkboxRef.current.checked = false)}
                            >
                                {navMenu.icon}
                                {navMenu.name}
                            </Link>
                        ))}
                    </div>

                    {isLogin && (
                        <div className={cx('menu')}>
                            <button className={cx('menu-item')} onClick={handleLogout}>
                                <FiLogOut size="20" />
                                Đăng xuất
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default MobileMenu;
