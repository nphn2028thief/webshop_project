import classNames from 'classnames/bind';

/* Import Swiper React components */
import { Swiper, SwiperSlide } from 'swiper/react';

/* Import Swiper styles */
import 'swiper/css';
import 'swiper/css/pagination';

/* import required modules */
import { Autoplay } from 'swiper';

import styles from './Slider.module.scss';
import { sliderData } from '~/data';
import SliderItem from './SliderItem';

const cx = classNames.bind(styles);

function Slider() {
    return (
        <div className={cx('container', 'wrapper')}>
            <Swiper
                slidesPerView={1}
                speed={1000}
                spaceBetween={0}
                modules={[Autoplay]}
                grabCursor={true}
                // autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                {sliderData.map((item) => (
                    <SwiperSlide key={item.id}>
                        {({ isActive }) => <SliderItem data={item} isActive={isActive} />}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider;
