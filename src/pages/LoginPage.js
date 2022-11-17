// import { useLocation } from 'react-router-dom';
import Login from '~/components/Login';
import TabTitle from '~/components/TabTitle';

function LoginPage() {
    // const {pathname} = useLocation();

    return (
        <TabTitle title="Đăng nhập">
            <Login />
        </TabTitle>
    );
}

export default LoginPage;
