import classNames from 'classnames/bind';
import { MdFiberNew } from 'react-icons/md';
import ProductItem from './ProductItem';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product({ title, isNew = false, data }) {
    return (
        <div className={cx('wrapper')}>
            {/* Nếu isNew thì set title animation là cầu vồng nhấp nhảy */}

            <h2 className={isNew ? cx('title', 'rainbow') : cx('title')} data-heading={title}>
                {title}
                {isNew && (
                    <span className={cx('new', 'rainbow')}>
                        <MdFiberNew size="24" />
                    </span>
                )}
            </h2>

            <ul className={cx('product-list', 'container')}>
                {data.map((product) => (
                    <ProductItem key={product.id} data={product} />
                ))}
            </ul>
        </div>
    );
}

export default Product;
