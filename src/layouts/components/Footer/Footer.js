import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { supportContents, abouts, supportCustomers } from '~/data';
import Logo from '~/components/Logo';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('container', 'footer-container')}>
            <ul className={cx('contents')}>
                <h4 className={cx('title')}>TỔNG ĐÀI HỖ TRỢ</h4>
                {supportContents.map((item) => (
                    <li key={item.id} className={cx('content-item')}>
                        {item.display}
                        <b style={{ marginLeft: '6px' }}>{item.phone}</b>
                    </li>
                ))}
            </ul>

            <ul className={cx('contents')}>
                <h4 className={cx('title')}>VỀ YOLO</h4>
                {abouts.map((item) => (
                    <li key={item.id} className={cx('content-item')}>
                        {item.display}
                        <b style={{ marginLeft: '6px' }}>{item.phone}</b>
                    </li>
                ))}
            </ul>

            <ul className={cx('contents')}>
                <h4 className={cx('title')}>CHĂM SÓC KHÁCH HÀNG</h4>
                {supportCustomers.map((item) => (
                    <li key={item.id} className={cx('content-item')}>
                        {item.display}
                        <b style={{ marginLeft: '6px' }}>{item.phone}</b>
                    </li>
                ))}
            </ul>

            <div className={cx('contents')}>
                <Logo className={cx('logo')} />
                <p className={cx('desc')}>
                    Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt. Hãy
                    cùng Yolo hướng đến một cuộc sống năng động, tích cực hơn.
                </p>
            </div>
        </div>
    );
}

export default Footer;
