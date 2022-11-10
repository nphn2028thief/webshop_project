import { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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

    const { pathname } = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(setIsLogin(true));
        navigate('/');
    };

    return (
        <>
            <div className={cx('wrapper')}>
                {pathname === '/account/login' ? (
                    <>
                        <h2 className={cx('title')}>Đăng nhập</h2>

                        <form className={cx('form-control')}>
                            <div className={cx('control')}>
                                <input ref={accountRef} className={cx('input')} placeholder="Tên đăng nhập" />
                                <span className={cx('error')}>Error</span>
                            </div>

                            <div className={cx('control')}>
                                <input
                                    ref={passwordRef}
                                    type="password"
                                    className={cx('input')}
                                    placeholder="Mật khẩu"
                                />
                                <span className={cx('error')}>error</span>
                            </div>

                            <span className={cx('text')}>
                                Bạn chưa có tài khoản?
                                <Link to="/account/register" className={cx('link')}>
                                    Đăng ký
                                </Link>
                            </span>

                            <input
                                type="submit"
                                className={cx('submit-btn')}
                                value="Đăng nhập"
                                onClick={(e) => handleLogin(e)}
                            />
                            <span className={cx('forgot-password')}>Quên mật khẩu?</span>
                        </form>
                    </>
                ) : (
                    <>
                        <h2 className={cx('title')}>Đăng ký</h2>

                        <form className={cx('form-control')}>
                            <div className={cx('control')}>
                                <input className={cx('input')} placeholder="Tên đăng nhập" />
                                <span className={cx('error')}>Error</span>
                            </div>

                            <div className={cx('control')}>
                                <input type="password" className={cx('input')} placeholder="Mật khẩu" />
                                <span className={cx('error')}>error</span>
                            </div>

                            <div className={cx('control')}>
                                <input type="password" className={cx('input')} placeholder="Nhập lại mật khẩu" />
                                <span className={cx('error')}>error</span>
                            </div>

                            <div className={cx('control')}>
                                <input className={cx('input')} placeholder="Họ tên" />
                                <span className={cx('error')}>error</span>
                            </div>

                            <div className={cx('control')}>
                                <input className={cx('input')} placeholder="Địa chỉ" />
                                <span className={cx('error')}>error</span>
                            </div>

                            <div className={cx('control')}>
                                <input className={cx('input')} type="number" placeholder="Số điện thoại" />
                                <span className={cx('error')}>error</span>
                            </div>

                            <span className={cx('text')}>
                                Bạn đã có tài khoản?
                                <Link to="/account/login" className={cx('link')}>
                                    Đăng nhập
                                </Link>
                            </span>

                            <input
                                type="submit"
                                className={cx('submit-btn')}
                                value="Đăng ký"
                                // onClick={(e) => handleLogin(e)}
                            />
                        </form>
                    </>
                )}
            </div>
            <div className={cx('loading-handler')}>
                <span className={cx('loading-icon')}>
                    <i className="bx bx-loader-alt"></i>
                </span>
            </div>
        </>
    );
}

export default Login;
