import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    to,
    href,
    className,
    primary = false,
    unique = false,
    outline = false,
    rounded = false,
    small = false,
    icon,
    onClick,
    ...passProps
}) {
    let Component = 'button';

    const _props = {
        onClick,
        ...passProps,
    };

    if (to) {
        _props.to = to;
        Component = Link;
    } else if (href) {
        _props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        unique,
        outline,
        rounded,
        small,
    });

    return (
        <Component className={classes} {..._props}>
            {icon && icon}
            <span className={cx('text')}>{children}</span>
        </Component>
    );
}

export default Button;
