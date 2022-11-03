import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Logo({ className }) {
    const classes = cx('wrapper', {
        [className]: className,
    });

    return (
        <Link to="/" className={classes}>
            <img src={images.logo} alt="logo" />
        </Link>
    );
}

export default Logo;
