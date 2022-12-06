import config from '~/config';
import HomePage from '~/pages/HomePage';
import ProductPage from '~/pages/ProductPage';
import ProductDetailPage from '~/pages/ProductDetailPage';
import CartPage from '~/pages/CartPage';
import LoginPage from '~/pages/LoginPage';
import ContentOnly from '~/layouts/ContentOnly';

const publicRoutes = [
    {
        path: config.routes.home,
        component: HomePage,
    },
    {
        path: config.routes.product,
        component: ProductPage,
    },
    {
        path: config.routes.productDetail,
        component: ProductDetailPage,
    },
    {
        path: config.routes.cart,
        component: CartPage,
    },
    {
        path: config.routes.login,
        component: LoginPage,
        layout: ContentOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
