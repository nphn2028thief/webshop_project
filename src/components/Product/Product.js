import classNames from 'classnames/bind';
import { FiShoppingCart } from 'react-icons/fi';

import images from '~/assets/images';
import Image from '../Image';
import styles from './Product.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

function Product({ isBestSeller = false, isNewProduct = false, title }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>{title}</h2>
            <ul className={cx('product-list', 'container')}>
                <li className={cx('product-item')}>
                    <div className={cx('images')}>
                        <Image src={images.product_01_image_01} className={cx('model-image')} alt="model-img" />
                        <Image src={images.product_01_image_02} className={cx('product-image')} alt="product-img" />
                    </div>

                    <div className={cx('info')}>
                        <h5 className={cx('name')}>Áo khủng long Dinosaur 01</h5>
                        <div className={cx('prices')}>
                            <span className={cx('new-price')}>200.000</span>
                            <span className={cx('old-price')}>320.000</span>
                        </div>
                        <Button to="/" className={cx('detail-btn')} primary small icon={<FiShoppingCart size="20" />}>
                            XEM CHI TIẾT
                        </Button>
                    </div>
                </li>

                <li className={cx('product-item')}>
                    <div className={cx('images')}>
                        <Image src={images.product_01_image_01} className={cx('model-image')} alt="model-img" />
                        <Image src={images.product_01_image_02} className={cx('product-image')} alt="product-img" />
                    </div>

                    <div className={cx('info')}>
                        <h5 className={cx('name')}>Áo khủng long Dinosaur 01</h5>
                        <div className={cx('prices')}>
                            <span className={cx('new-price')}>200.000</span>
                            <span className={cx('old-price')}>320.000</span>
                        </div>
                        <Button to="/" className={cx('detail-btn')} primary small icon={<FiShoppingCart size="20" />}>
                            XEM CHI TIẾT
                        </Button>
                    </div>
                </li>

                <li className={cx('product-item')}>
                    <div className={cx('images')}>
                        <Image src={images.product_01_image_01} className={cx('model-image')} alt="model-img" />
                        <Image src={images.product_01_image_02} className={cx('product-image')} alt="product-img" />
                    </div>

                    <div className={cx('info')}>
                        <h5 className={cx('name')}>Áo khủng long Dinosaur 01</h5>
                        <div className={cx('prices')}>
                            <span className={cx('new-price')}>200.000</span>
                            <span className={cx('old-price')}>320.000</span>
                        </div>
                        <Button to="/" className={cx('detail-btn')} primary small icon={<FiShoppingCart size="20" />}>
                            XEM CHI TIẾT
                        </Button>
                    </div>
                </li>

                <li className={cx('product-item')}>
                    <div className={cx('images')}>
                        <Image src={images.product_01_image_01} className={cx('model-image')} alt="model-img" />
                        <Image src={images.product_01_image_02} className={cx('product-image')} alt="product-img" />
                    </div>

                    <div className={cx('info')}>
                        <h5 className={cx('name')}>Áo khủng long Dinosaur 01</h5>
                        <div className={cx('prices')}>
                            <span className={cx('new-price')}>200.000</span>
                            <span className={cx('old-price')}>320.000</span>
                        </div>
                        <Button to="/" className={cx('detail-btn')} primary small icon={<FiShoppingCart size="20" />}>
                            XEM CHI TIẾT
                        </Button>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Product;
