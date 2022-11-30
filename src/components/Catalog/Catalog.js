import { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import { filterCategories, filterColors, filterSizes, products as productsData } from '~/data';
import Filter from '../Filter';
import Button from '../Button';
import styles from './Catalog.module.scss';
import ProductItem from '../Product/ProductItem';
import MobileMenuWrapper from '../MobileMenuWrapper';

const cx = classNames.bind(styles);

function Catalog() {
    const [checked, setChecked] = useState({
        categories: [],
        colors: [],
        sizes: [],
    });

    const [products, setProducts] = useState(productsData);

    const checkBoxRef = useRef();

    const handleChange = (type, slug) => {
        const isChecked =
            checked.categories.includes(slug) || checked.colors.includes(slug) || checked.sizes.includes(slug);

        if (isChecked) {
            switch (type) {
                case 'CATEGORY':
                    setChecked({ ...checked, categories: checked.categories.filter((item) => item !== slug) });
                    break;
                case 'COLOR':
                    setChecked({ ...checked, colors: checked.colors.filter((item) => item !== slug) });
                    break;
                case 'SIZE':
                    setChecked({ ...checked, sizes: checked.sizes.filter((item) => item !== slug) });
                    break;
                default:
            }
        } else {
            switch (type) {
                case 'CATEGORY':
                    setChecked({ ...checked, categories: [...checked.categories, slug] });
                    break;
                case 'COLOR':
                    setChecked({ ...checked, colors: [...checked.colors, slug] });
                    break;
                case 'SIZE':
                    setChecked({ ...checked, sizes: [...checked.sizes, slug] });
                    break;
                default:
            }
        }
    };

    const updateProductList = useCallback(() => {
        let t = productsData;

        if (checked.categories.length > 0) {
            t = t.filter((e) => checked.categories.includes(e.categorySlug));
        }

        if (checked.colors.length > 0) {
            t = t.filter((e) => {
                const check = e.colors.find((color) => checked.colors.includes(color));
                return check !== undefined;
            });
        }

        if (checked.sizes.length > 0) {
            t = t.filter((e) => {
                const check = e.sizes.find((size) => checked.sizes.includes(size));
                return check !== undefined;
            });
        }

        setProducts(t);
    }, [checked.categories, checked.colors, checked.sizes]);

    useEffect(() => {
        updateProductList();
    }, [updateProductList]);

    const handleReset = () => {
        // setChecked({
        //     categories: [],
        //     color: [],
        //     sizes: [],
        // });
        //Error
    };

    // console.log(checked);

    return (
        <div className={cx('wrapper', 'container')}>
            <label className={cx('filter-btn')} htmlFor={styles['filter-mobile-menu-input']}>
                MỞ BỘ LỌC
            </label>

            <input ref={checkBoxRef} type="checkbox" id={cx('filter-mobile-menu-input')} />

            <label htmlFor={styles['filter-mobile-menu-input']} className={cx('overlay')}></label>

            <MobileMenuWrapper className={cx('sidebar')}>
                <Filter
                    title="danh mục sản phẩm"
                    data={filterCategories}
                    checked={checked.categories}
                    onChange={handleChange}
                />

                <Filter title="màu sắc" data={filterColors} checked={checked.colors} onChange={handleChange} />

                <Filter title="kích cỡ" data={filterSizes} checked={checked.sizes} onChange={handleChange} />

                <Button outline small className={cx('delete-filter-btn')} onClick={handleReset}>
                    XOÁ BỘ LỌC
                </Button>
            </MobileMenuWrapper>

            <div className={cx('content')}>
                <ul className={cx('product-list')}>
                    {products.map((product) => (
                        <ProductItem key={product.id} data={product} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Catalog;
