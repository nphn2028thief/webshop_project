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
    const [showResult, setShowResult] = useState(true);
    // const timeId = useRef();

    const debouncedValue = useDebounced(searchValue, 1000);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        if (debouncedValue.trim()) {
            setLoading(true);
        }

        fetch('https://webshop-server.vercel.app/products')
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

        // timeId.current = setTimeout(() => {
        //     setLoading(false);
        // }, 2000);

        // setSearchResult([
        //     {
        //         id: 1,
        //         image: '',
        //         name: 'Áo thun Dinosaur 01',
        //         oldPrice: '399,000',
        //         newPrice: '189,000',
        //     },
        //     {
        //         id: 2,
        //         image: '',
        //         name: 'Áo thun Dinosaur 02',
        //         oldPrice: '399,000',
        //         newPrice: '159,000',
        //     },
        //     {
        //         id: 3,
        //         image: '',
        //         name: 'Áo thun Dinosaur 03',
        //         oldPrice: '399,000',
        //         newPrice: '190,000',
        //     },
        //     {
        //         id: 4,
        //         image: '',
        //         name: 'Áo thun Dinosaur 04',
        //         oldPrice: '399,000',
        //         newPrice: '194,000',
        //     },
        //     {
        //         id: 5,
        //         image: '',
        //         name: 'Áo thun Dinosaur 05',
        //         oldPrice: '399,000',
        //         newPrice: '194,000',
        //     },
        // ]);

        // return () => clearTimeout(timeId.current);
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
