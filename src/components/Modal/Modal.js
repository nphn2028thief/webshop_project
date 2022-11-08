import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Modal;
