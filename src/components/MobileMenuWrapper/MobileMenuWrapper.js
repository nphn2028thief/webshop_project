import classNames from 'classnames/bind';
import styles from './MobileMenuWrapper.module.scss';

const cx = classNames.bind(styles);

function MobileMenuWrapper({ className, children }) {
    const classes = cx('content', {
        [className]: className,
    });

    return <div className={classes}>{children}</div>;
}

export default MobileMenuWrapper;
