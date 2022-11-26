// import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Filter.module.scss';

const cx = classNames.bind(styles);

function Filter({ title, data, checked, onChange }) {
    return (
        <div className={cx('wrapper')}>
            <h5 className={cx('title')}>{title}</h5>
            <ul className={cx('filter-list')}>
                {data.map((item) => (
                    <li key={item.id} className={cx('filter-item')}>
                        <input
                            type="checkbox"
                            checked={checked && checked.includes(item.categorySlug || item.color || item.size)}
                            onChange={() => onChange(item.type, item.categorySlug || item.color || item.size)}
                        />
                        <span className={cx('text')}>{item.display}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Filter;
