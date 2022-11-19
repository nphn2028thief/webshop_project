import Slider from '~/components/Slider';
import TabTitle from '~/components/TabTitle';
import PolicyCard from '~/PolicyCard';

function HomePage() {
    return (
        <TabTitle title="Trang chủ">
            <Slider />
            <PolicyCard />
        </TabTitle>
    );
}

export default HomePage;
