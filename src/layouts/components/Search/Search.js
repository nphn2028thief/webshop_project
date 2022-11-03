import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useDebounced } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    // const [searchResult, setSearchResult] = useState([]);
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

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const inputValue = e.target.value;

        /* Kiểm tra ký tự đầu tiên mà là khoảng trắng (space) là không cho nhập */
        if (!inputValue.startsWith(' ')) {
            setSearchValue(inputValue);
        }
    };

    return (
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
        </div>
    );
}

export default Search;
