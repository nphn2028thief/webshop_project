import config from '~/config';
import HomePage from '~/pages/HomePage';
import CatalogPage from '~/pages/CatalogPage';
import CartPage from '~/pages/CartPage';
import ProductPage from '~/pages/ProductPage';
import LoginPage from '~/pages/LoginPage';
import ContentOnly from '~/layouts/ContentOnly';

const publicRoutes = [
    {
        path: config.routes.home,
        component: HomePage,
    },
    {
        path: config.routes.catalog,
        component: CatalogPage,
    },
    {
        path: config.routes.product,
        component: ProductPage,
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
    // {
    //     path: config.routes.cart,
    //     component: CartPage,
    // },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
