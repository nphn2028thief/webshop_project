import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

function Slider() {
    return <div className={cx('wrapper')}>Slider</div>;
}

export default Slider;
