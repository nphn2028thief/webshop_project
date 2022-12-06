import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import { useStore } from '~/hooks';
import { setIsLogin } from '~/store/actions';
import { FacebookIcon, GoogleIcon } from '~/components/Icons';
import Button from '../Button';

const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useStore();
    const [clicked, setClicked] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(setIsLogin(true));
        navigate('/');
    };

    return (
        <div className={clicked ? cx('wrapper', 'right-panel-active') : cx('wrapper')}>
            <div className={cx('form-container', 'sign-up-container')}>
                <form className={cx('form-control')}>
                    <h2 className={cx('title')}>Đăng ký tài khoản</h2>

                    <div style={{ marginTop: '16px' }}>
                        <div className={cx('control')}>
                            <input className={cx('input')} type="tel" placeholder="Số điện thoại" />
                            {/* <span className={cx('error')}>Error</span> */}
                        </div>
                        <div className={cx('control')}>
                            <input className={cx('input')} type="password" placeholder="Mật khẩu" />
                            {/* <span className={cx('error')}>Error</span> */}
                        </div>
                        <div className={cx('control')}>
                            <input className={cx('input')} type="password" placeholder="Nhập lại mật khẩu" />
                            {/* <span className={cx('error')}>Error</span> */}
                        </div>
                        <div className={cx('control')}>
                            <input className={cx('input')} placeholder="Họ tên" />
                            {/* <span className={cx('error')}>Error</span> */}
                        </div>
                        <div className={cx('control')}>
                            <input className={cx('input')} placeholder="Địa chỉ" />
                            {/* <span className={cx('error')}>Error</span> */}
                        </div>
                    </div>

                    <input type="submit" className={cx('submit-btn')} value="Đăng ký" />

                    <span className={cx('text')}>
                        Bạn đã có tài khoản?
                        <span className={cx('switch-text')} onClick={() => setClicked(false)}>
                            Đăng nhập
                        </span>
                    </span>
                </form>
            </div>

            <div className={cx('form-container', 'sign-in-container')}>
                <form className={cx('form-control')}>
                    <h2 className={cx('title')}>Đăng nhập</h2>
                    <div className={cx('social-list')}>
                        <button className={cx('social-item')}>
                            <FacebookIcon />
                        </button>

                        <button className={cx('social-item')}>
                            <GoogleIcon />
                        </button>
                    </div>
                    <span className={cx('text')}>hoặc sử dụng số điện thoại để đăng nhập</span>

                    <div style={{ width: '100%', marginTop: '16px' }}>
                        <div className={cx('control')}>
                            <input className={cx('input')} type="tel" placeholder="Số điện thoại" />
                            {/* <span className={cx('error')}>Error</span> */}
                        </div>
                        <div className={cx('control')}>
                            <input className={cx('input')} type="password" placeholder="Mật khẩu" />
                            {/* <span className={cx('error')}>Error</span> */}
                        </div>
                    </div>

                    <Link to="/account/forgot" className={cx('forgot')}>
                        Quên mật khẩu?
                    </Link>

                    <input
                        type="submit"
                        className={cx('submit-btn')}
                        value="Đăng nhập"
                        onClick={(e) => handleLogin(e)}
                    />

                    <span className={cx('text')}>
                        Bạn chưa có tài khoản?
                        <span className={cx('switch-text')} onClick={() => setClicked(true)}>
                            Đăng ký
                        </span>
                    </span>
                </form>
            </div>

            <div className={cx('overlay-container')}>
                <div className={cx('overlay')}>
                    <div className={cx('overlay-panel', 'left')}>
                        <h2 className={cx('overlay-title')}>Chào mừng trở lại!</h2>
                        <p className={cx('overlay-desc')}>
                            Để kết nối với chúng tôi, vui lòng đăng nhập bằng thông tin của bạn
                        </p>
                        <Button outline className={cx('switch-btn')} onClick={() => setClicked(false)}>
                            Đăng nhập
                        </Button>
                    </div>

                    <div className={cx('overlay-panel', 'right')}>
                        <h2 className={cx('overlay-title')}>Xin chào, người mới!</h2>
                        <p className={cx('overlay-desc')}>Nhập thông tin của bạn và bắt đầu mua sắm với chúng tôi</p>
                        <Button outline className={cx('switch-btn')} onClick={() => setClicked(true)}>
                            Đăng ký
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
