import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { useDebounced } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const timeId = useRef();

    const debouncedValue = useDebounced(searchValue, 1000);

    useEffect(() => {
        // if (!debouncedValue.trim()) {
        //     setSearchResult([]);
        //     return;
        // }

        if (debouncedValue.trim()) {
            setLoading(true);
        }

        timeId.current = setInterval(() => {
            setLoading(false);
        }, 1000);

        return () => clearInterval(timeId.current);
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
        inputRef.current.focus();
    };

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3, 4, 5, 6, 7]);
        }, 0);
    }, []);

    return (
        <div className={cx('wrapper-tippy')}>
            <Tippy
                visible
                interactive
                placement="top-start"
                render={(attrs) => (
                    <div className={cx('search-result')} {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Sản phẩm</h4>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('wrapper')}>
                    <input
                        ref={inputRef}
                        className={cx('search-input')}
                        placeholder="Search Product here!"
                        value={searchValue}
                        onChange={(e) => handleChange(e)}
                    />

                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <i className={cx('bx bx-x')}></i>
                        </button>
                    )}

                    {loading && <i className={cx('bx bx-loader-alt', 'loading')}></i>}

                    {/* <div className={cx('search-result')} tabIndex="-1">
                <PopperWrapper>
                    <h4 className={cx('search-title')}>Sản phẩm</h4>
                </PopperWrapper>
            </div> */}
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
