import Product from '~/components/Product';
import Slider from '~/components/Slider';
import TabTitle from '~/components/TabTitle';
import PolicyCard from '~/PolicyCard';

function HomePage() {
    return (
        <TabTitle title="Trang chủ">
            <Slider />
            <PolicyCard />
            <Product isBestSeller title="Top sản phẩm bán chạy trong tuần" />
            <Product isNew title="Sản phẩm mới" />
            <Product isPopular title="Sản phẩm phổ biến" />
        </TabTitle>
    );
}

export default HomePage;
