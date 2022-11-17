import { BiHomeAlt } from 'react-icons/bi';
import { GiClothes, GiExtractionOrb } from 'react-icons/gi';
import { MdOutlineContactless } from 'react-icons/md';

import images from '~/assets/images';

export const navMenus = [
    {
        id: 1,
        to: '/',
        name: 'Trang chủ',
        icon: <BiHomeAlt size="20" />,
    },
    {
        id: 2,
        to: '/catalogs',
        name: 'Sản phẩm',
        icon: <GiClothes size="20" />,
    },
    {
        id: 3,
        to: '/accessories',
        name: 'Phụ kiện',
        icon: <GiExtractionOrb size="20" />,
    },
    {
        id: 4,
        to: '/contact',
        name: 'Liên hệ',
        icon: <MdOutlineContactless size="20" />,
    },
];

export const supportContents = [
    {
        id: 1,
        display: 'Liên hệ đặt hàng:',
        phone: '0777498646',
    },
    {
        id: 2,
        display: 'Thắc mắc đơn hàng:',
        phone: '0777498646',
    },
    {
        id: 3,
        display: 'Góp ý khiếu nại:',
        phone: '0777498646',
    },
];

export const abouts = [
    {
        id: 1,
        display: 'Giới thiệu',
    },
    {
        id: 2,
        display: 'Liên hệ',
    },
    {
        id: 3,
        display: 'Tuyển dụng',
    },
    {
        id: 4,
        display: 'Tin tức',
    },
    {
        id: 5,
        display: 'Hệ thống cửa hàng',
    },
];

export const supportCustomers = [
    {
        id: 1,
        display: 'Chính sách đổi trả',
    },
    {
        id: 2,
        display: 'Chính sách bảo hành',
    },
    {
        id: 3,
        display: 'Chính sách hoàn tiền',
    },
];

export const sliderData = [
    {
        id: 1,
        title: 'Polo nữ Pima cao cấp',
        desc: 'Nhắc đến sự đẳng cấp là không thể không nhắc đến dòng vải Pima. Nó tạo nên chất lượng tốt nhất cho bất kỳ sản phẩm thời trang nào. Sợi vài Pima dài và dày hơn sợi cotton thông thường gấp đôi nhờ công nghệ tân tiến. Điều đó làm cho kết cấu áo Polo chắc chắn, bền, hạn chế tối đa xù lông, mềm mượt và đảm bảo sức khoẻ người dùng.',
        image: images.imageSlider1,
        color: 'blue',
        path: '/catalog/ao-thun-polo-nu-01',
    },
    {
        id: 2,
        title: 'Polo nữ dáng suông Modal',
        desc: 'Polo nữ dáng suông Modal sử dụng công nghệ vải cao cấp thân thiện với môi trường, được sản xuất độc quyền chống co rút vải. Áo Polo nữ Modal là sản phẩm thích hợp cho các bạn có môi trường làm việc năng động như hiện nay.',
        image: images.imageSlider2,
        color: 'pink',
        path: '/catalog/ao-thun-polo-nu-02',
    },
    {
        id: 3,
        title: 'Polo nữ Coolmax Lacoste',
        desc: 'Mẫu áo Polo nữ được làm bằng chất liệu Coolmax đem lại cảm giác mát lạnh khi mặc. Thiết kế mẫu áo Polo Coolmax này có kiểu dáng cực kỳ thoải mái, tạo sự gọn gàng hứa hẹn sẽ là mẫu áo Polo vô cùng hot trong thời điểm sắp tới.',
        image: images.imageSlider3,
        color: 'orange',
        path: '/catalog/ao-thun-polo-nu-03',
    },
];
