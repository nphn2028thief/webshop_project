import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function ProductItem({ data, amount }) {
    return (
        <Link to="/catalogs/:slug" className={cx('product-item')}>
            <Image src={data.image} className={cx('image')} alt="product-img" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>{data.name}</h4>
                <div className={cx('price')}>
                    <span className={cx('new-price')}>₫{data.newPrice}</span>
                    <span className={cx('old-price')}>₫{data.oldPrice}</span>
                </div>
                {amount && <span className={cx('amount')}>{amount}</span>}
            </div>
        </Link>
    );
}

export default ProductItem;
