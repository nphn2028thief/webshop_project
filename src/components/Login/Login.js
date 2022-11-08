import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import Modal from '../Modal';
import styles from './Login.module.scss';
import { useStore } from '~/hooks';
import { setIsLogin } from '~/store/actions';

const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();
    const [state, dispatch] = useStore();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(setIsLogin(true));
        navigate('/');
    };

    return (
        <Modal>
            <h2 className={cx('title')}>Đăng nhập</h2>

            <form className={cx('form-control')}>
                <div className={cx('control')}>
                    <input className={cx('input')} placeholder="Tài khoản" />
                    <span className={cx('error')}>ABC</span>
                </div>

                <div className={cx('control')}>
                    <input className={cx('input')} placeholder="Mật khẩu" />
                    <span className={cx('error')}>ABC</span>
                </div>

                <input type="submit" className={cx('submit-btn')} value="Đăng nhập" onClick={(e) => handleLogin(e)} />

                <span className={cx('forgot-password')}>Quên mật khẩu?</span>
            </form>
        </Modal>
    );
}

export default Login;
