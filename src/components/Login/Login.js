import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import { useStore } from '~/hooks';
import { setIsLogin } from '~/store/actions';

const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();
    const [state, dispatch] = useStore();

    const accountRef = useRef();
    const passwordRef = useRef();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(setIsLogin(true));
        navigate('/');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('action')}>
                <h2 className={cx('title')}>Đăng nhập</h2>
                <Link to="/account/register" className={cx('action-register')}>
                    Đăng ký
                </Link>
            </div>

            <form className={cx('form-control')}>
                <div className={cx('control')}>
                    <input ref={accountRef} className={cx('input')} placeholder="Tài khoản" />
                    <span className={cx('error')}>Error</span>
                </div>

                <div className={cx('control')}>
                    <input ref={passwordRef} type="password" className={cx('input')} placeholder="Mật khẩu" />
                    <span className={cx('error')}>error</span>
                </div>

                <input type="submit" className={cx('submit-btn')} value="Đăng nhập" onClick={(e) => handleLogin(e)} />

                <span className={cx('forgot-password')}>Quên mật khẩu?</span>
            </form>
        </div>
    );
}

export default Login;
