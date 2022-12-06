import { useState, useEffect } from 'react';

import Product from '~/components/Product';
import Slider from '~/components/Slider';
import TabTitle from '~/components/TabTitle';
import { products } from '~/data';
import PolicyCard from '~/components/PolicyCard';

function HomePage() {
    const [bestSellerProducts, setBestSellerProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);

    useEffect(() => {
        const getBestSellerProducts = (arr, start, end) => {
            /* Sắp xếp mảng giảm dần theo count */
            arr.sort((a, b) => b.count - a.count);

            return arr.slice(start, end);
        };

        setBestSellerProducts(getBestSellerProducts(products, 0, 4));
    }, []);

    useEffect(() => {
        const getNewProducts = (arr) => {
            /* Sắp xếp mảng giảm dần theo count */
            const listNewProduct = arr.filter((product) => product.isNewProduct === true);

            if (arr.length - 1 > 8) {
                return listNewProduct.slice(0, 8);
            } else {
                return listNewProduct;
            }
        };

        setNewProducts(getNewProducts(products));
    }, []);

    return (
        <TabTitle title="Trang chủ">
            <Slider />
            <PolicyCard />
            <Product title="Top sản phẩm bán chạy trong tuần" data={bestSellerProducts} />
            <Product title="Sản phẩm mới" isNew data={newProducts} />
            <Product title="Sản phẩm phổ biến" data={products} />
        </TabTitle>
    );
}

export default HomePage;
