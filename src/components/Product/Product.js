import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { MdFiberNew } from 'react-icons/md';

import { products } from '~/data';
import ProductItem from './ProductItem';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product({ isBestSeller = false, isNew = false, title }) {
    const [bestSellerProducts, setBestSellerProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);

    useEffect(() => {
        const getBestSellerProducts = (arr, start, end) => {
            /* Sắp xếp mảng giảm dần theo count */
            arr.sort((a, b) => b.count - a.count);

            return arr.slice(start, end);
        };

        setBestSellerProducts(getBestSellerProducts(products, 0, 4));
    }, []);

    useEffect(() => {
        const getNewProducts = (arr) => {
            /* Sắp xếp mảng giảm dần theo count */
            const listNewProduct = arr.filter((product) => product.isNewProduct === true);

            if (arr.length - 1 > 8) {
                return listNewProduct.slice(0, 8);
            } else {
                return listNewProduct;
            }
        };

        setNewProducts(getNewProducts(products));
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h2 className={isNew ? cx('title', 'rainbow') : cx('title')}>
                {title}
                {isNew && (
                    <span className={cx('new', 'rainbow')}>
                        <MdFiberNew size="24" />
                    </span>
                )}
            </h2>
            <ul className={cx('product-list', 'container')}>
                {isBestSeller && bestSellerProducts
                    ? bestSellerProducts.map((bestSellerProduct) => (
                          <ProductItem key={bestSellerProduct.id} data={bestSellerProduct} />
                      ))
                    : isNew && newProducts
                    ? newProducts.map((newProduct) => <ProductItem key={newProduct.id} data={newProduct} />)
                    : products.map((product) => <ProductItem key={product.id} data={product} />)}
            </ul>
        </div>
    );
}

export default Product;
