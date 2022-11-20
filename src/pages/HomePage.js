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
        </TabTitle>
    );
}

export default HomePage;
