import classNames from 'classnames/bind';
import styles from './PolicyCard.module.scss';
import { policies } from '~/data';

const cx = classNames.bind(styles);

function PolicyCard() {
    return (
        <ul className={cx('container', 'wrapper')}>
            {policies.map((item) => (
                <li key={item.id} className={cx('policy-card-item')}>
                    {item.icon}
                    <div className={cx('info')}>
                        <h5 className={cx('name')}>{item.name}</h5>
                        <p className={cx('desc')}>{item.desc}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default PolicyCard;
