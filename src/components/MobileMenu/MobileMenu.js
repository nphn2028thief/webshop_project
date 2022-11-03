import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FiLogOut } from 'react-icons/fi';
import { BiShoppingBag } from 'react-icons/bi';

import { navMenus } from '~/data';
import styles from './MobileMenu.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function MobileMenu() {
    const [count, setCount] = useState(100);
    const [width, setWidth] = useState(window.innerWidth);
    const inputRef = useRef();

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);

            if (width > 1149) {
                inputRef.current.checked = false;
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [width]);

    useEffect(() => {
        if (count > 99) {
            setCount(`${99}+`);
        }
    }, [count]);

    return (
        <>
            <label className={cx('menu-btn')} htmlFor={styles['mobile-menu-input']}>
                <i className="bx bx-menu-alt-left"></i>
            </label>

            <input ref={inputRef} type="checkbox" id={cx('mobile-menu-input')} />

            <label htmlFor={styles['mobile-menu-input']} className={cx('overlay')}></label>

            <div className={cx('content')}>
                <div className={cx('info')}>
                    <Image src="" className={cx('avatar')} alt="avatar" />
                    <h6 className={cx('name')}>Nguyễn Nhân</h6>
                </div>

                <div className={cx('menu-list-wrap')}>
                    <div className={cx('menu')}>
                        <Link to="/cart" className={cx('menu-item')}>
                            <BiShoppingBag size="20" />
                            Giỏ hàng của tôi ({count})
                        </Link>
                    </div>

                    <div className={cx('menu')}>
                        {navMenus.map((navMenu) => (
                            <Link key={navMenu.id} to={navMenu.to} className={cx('menu-item')}>
                                {navMenu.icon}
                                {navMenu.name}
                            </Link>
                        ))}
                    </div>

                    <div className={cx('menu')}>
                        <button to="/cart" className={cx('menu-item')}>
                            <FiLogOut size="20" />
                            Đăng xuất
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileMenu;
