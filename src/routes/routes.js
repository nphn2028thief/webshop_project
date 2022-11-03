const { default: config } = require('~/config');
const { default: CartPage } = require('~/pages/CartPage');
const { default: CatalogPage } = require('~/pages/CatalogPage');
const { default: HomePage } = require('~/pages/HomePage');
const { default: ProductPage } = require('~/pages/ProductPage');

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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
