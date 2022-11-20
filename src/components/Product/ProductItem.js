import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FiShoppingCart } from 'react-icons/fi';

import Image from '../Image';
import Button from '../Button';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function ProductItem({ data }) {
    const decimalFormatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
        <li key={data.id} className={cx('product-item')}>
            <Link to={`/catalog/${data.slug}`}>
                <div className={cx('images')}>
                    <Image src={data.modelImage} className={cx('model-image')} alt="model-img" />
                    <Image src={data.image} className={cx('product-image')} alt="product-img" />
                </div>

                <div className={cx('info')}>
                    <h5 className={cx('name')}>{data.name}</h5>
                    <div className={cx('prices')}>
                        <span className={cx('new-price')}>{decimalFormatNumber(data.price)}₫</span>
                        <span className={cx('old-price')}>{decimalFormatNumber(320000)}₫</span>
                    </div>
                </div>
            </Link>

            <Button to="/cart" className={cx('detail-btn')} primary small icon={<FiShoppingCart size="20" />}>
                CHỌN MUA
            </Button>
        </li>
    );
}

export default ProductItem;
