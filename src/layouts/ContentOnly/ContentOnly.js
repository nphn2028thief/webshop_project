import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ContentOnly.module.scss';

const cx = classNames.bind(styles);

function ContentOnly({ children }) {
    useEffect(() => {
        let vh = window.innerHeight * 0.01;

        const handleResize = () => document.documentElement.style.setProperty('--vh', `${vh}px`);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <div className={cx('wrapper')}>{children}</div>;
}

export default ContentOnly;
