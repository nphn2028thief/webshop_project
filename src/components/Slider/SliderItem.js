import classNames from 'classnames/bind';
import { FiShoppingCart } from 'react-icons/fi';

import Button from '../Button';
import Image from '../Image';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

function SliderItem({ data, isActive }) {
    return (
        <div className={cx('slider-item')}>
            <div className={cx('info')}>
                <h3
                    className={isActive ? cx('title', 'active') : cx('title')}
                    style={{ color: `var(--${data.color})` }}
                >
                    {data.title}
                </h3>
                <p className={isActive ? cx('desc', 'active') : cx('desc')}>{data.desc}</p>

                <Button
                    to={data.path}
                    className={isActive ? cx('detail-btn', 'active') : cx('detail-btn')}
                    primary
                    small
                    icon={<FiShoppingCart size="20" />}
                    style={{ backgroundColor: `var(--${data.color})` }}
                >
                    XEM CHI TIẾT
                </Button>
            </div>

            <div className={cx('image-section')}>
                <Image src={data.image} className={isActive ? cx('image', 'active') : cx('image')} alt="slider-img" />
                <div className={cx('shape')} style={{ backgroundColor: `var(--${data.color})` }}></div>
            </div>
        </div>
    );
}

export default SliderItem;
