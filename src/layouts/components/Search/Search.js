import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { useDebounced } from '~/hooks';
import ProductItem from '~/components/ProductItem';

const cx = classNames.bind(styles);

function Search() {
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const timeId = useRef();

    const debouncedValue = useDebounced(searchValue, 1000);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        if (debouncedValue.trim()) {
            setLoading(true);
        }

        fetch('http://localhost:3001/products')
            .then((res) => res.json())
            .then((products) => {
                setSearchResult(products);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
            .finally(() => setLoading(false));
    }, [debouncedValue]);

    const handleChange = (e) => {
        const inputValue = e.target.value;

        /* Kiểm tra ký tự đầu tiên mà là khoảng trắng (space) là không cho nhập */
        if (!inputValue.startsWith(' ')) {
            setSearchValue(inputValue);
        }
    };

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    return (
        <div className={cx('wrapper')}>
            <input
                ref={inputRef}
                className={cx('search-input')}
                placeholder="Tìm kiếm sản phẩm ở đây!"
                value={searchValue}
                onChange={(e) => handleChange(e)}
                onFocus={() => setShowResult(true)}
                onBlur={() => setShowResult(false)}
            />

            {!!searchValue && !loading && (
                <button className={cx('clear')} onClick={handleClear}>
                    <i className={cx('bx bx-x')}></i>
                </button>
            )}

            {loading && <i className={cx('bx bx-loader-alt', 'loading')}></i>}

            {showResult && searchResult.length > 0 && (
                <div className={cx('search-result')} tabIndex="-1">
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Sản phẩm</h4>
                        <div className={cx('product-list')}>
                            {searchResult.map((item) => (
                                <ProductItem key={item.id} data={item} />
                            ))}
                        </div>
                    </PopperWrapper>
                </div>
            )}
        </div>
    );
}

export default Search;
