import { BiHomeAlt, BiDonateHeart } from 'react-icons/bi';
import { GiClothes, GiExtractionOrb } from 'react-icons/gi';
import { MdOutlineContactless, MdOutlineLocalShipping } from 'react-icons/md';
import { BsCreditCard } from 'react-icons/bs';
import { RiVipDiamondLine } from 'react-icons/ri';

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
        to: '/products',
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
        desc: 'Nhắc đến sự đẳng cấp là không thể không nhắc đến dòng vải Pima. Sợi vài Pima dài và dày hơn sợi cotton thông thường gấp đôi nhờ công nghệ tân tiến. Điều đó làm cho kết cấu áo Polo chắc chắn, bền, hạn chế tối đa xù lông, mềm mượt và đảm bảo sức khoẻ người dùng.',
        image: images.imageSlider1,
        color: 'blue',
        path: '/products/ao-thun-polo-nu-01',
    },
    {
        id: 2,
        title: 'Polo nữ dáng suông Modal',
        desc: 'Polo nữ dáng suông Modal sử dụng công nghệ vải cao cấp thân thiện với môi trường, được sản xuất độc quyền chống co rút vải. Áo Polo nữ Modal là sản phẩm thích hợp cho các bạn có môi trường làm việc năng động như hiện nay.',
        image: images.imageSlider2,
        color: 'pink',
        path: '/products/ao-thun-polo-nu-02',
    },
    {
        id: 3,
        title: 'Polo nữ Coolmax Lacoste',
        desc: 'Mẫu áo Polo nữ được làm bằng chất liệu Coolmax đem lại cảm giác mát lạnh khi mặc. Thiết kế mẫu áo Polo Coolmax này có kiểu dáng cực kỳ thoải mái, tạo sự gọn gàng hứa hẹn sẽ là mẫu áo Polo vô cùng hot trong thời điểm sắp tới.',
        image: images.imageSlider3,
        color: 'orange',
        path: '/products/ao-thun-polo-nu-03',
    },
];

export const policies = [
    {
        id: 1,
        name: 'Miễn phí giao hàng',
        desc: 'Miến phí ship với đơn hàng trên 239K',
        icon: <MdOutlineLocalShipping size="28" style={{ width: '100%', color: 'var(--blue)' }} />,
    },
    {
        id: 2,
        name: 'Thanh toán COD',
        desc: 'Thanh toán khi nhận hàng (COD)',
        icon: <BsCreditCard size="28" style={{ width: '100%', color: 'var(--blue)' }} />,
    },
    {
        id: 3,
        name: 'Khách hàng VIP',
        desc: 'Ưu đãi dành cho khách hàng VIP',
        icon: <RiVipDiamondLine size="28" style={{ width: '100%', color: 'var(--blue)' }} />,
    },
    {
        id: 4,
        name: 'Hỗ trợ bảo hành',
        desc: 'Đổi và sửa đồ tại tất cả cửa hàng trên toàn quốc',
        icon: <BiDonateHeart size="28" style={{ width: '100%', color: 'var(--blue)' }} />,
    },
];

export const products = [
    {
        id: 1,
        name: 'Áo thun Dinosaur 01',
        price: '189000',
        modelImage: images.product_01_image_01,
        image: images.product_01_image_02,
        categorySlug: 'ao-thun',
        slug: 'ao-thun-dinosaur-01',
        colors: ['white', 'red', 'orange'],
        sizes: ['S', 'M', 'L', 'XL'],
        isNewProduct: false,
        count: 397,
    },
    {
        id: 2,
        name: 'Áo thun Dinosaur 02',
        price: '159000',
        modelImage: images.product_02_image_01,
        image: images.product_02_image_02,
        categorySlug: 'ao-thun',
        slug: 'ao-thun-dinosaur-02',
        colors: ['white', 'red', 'blue'],
        sizes: ['S', 'M'],
        isNewProduct: false,
        count: 256,
    },
    {
        id: 3,
        name: 'Áo thun Dinosaur 03',
        price: '190000',
        modelImage: images.product_03_image_01,
        image: images.product_03_image_02,
        categorySlug: 'ao-thun',
        slug: 'ao-thun-dinosaur-03',
        colors: ['white', 'red', 'orange', 'yellow'],
        sizes: ['M'],
        isNewProduct: true,
        count: 550,
    },
    {
        id: 4,
        name: 'Áo thun Polo 01',
        price: '194000',
        modelImage: images.product_04_image_01,
        image: images.product_04_image_02,
        categorySlug: 'ao-thun',
        slug: 'ao-thun-polo-01',
        colors: ['white', 'orange', 'blue'],
        sizes: ['XL'],
        isNewProduct: false,
        count: 498,
    },
    {
        id: 5,
        name: 'Áo thun Polo 02',
        price: '194000',
        modelImage: images.product_05_image_01,
        image: images.product_05_image_02,
        categorySlug: 'ao-thun',
        slug: 'ao-thun-polo-02',
        colors: ['white', 'pink'],
        sizes: ['XXL'],
        isNewProduct: true,
        count: 97,
    },
    {
        id: 6,
        name: 'Áo thun Polo 03',
        price: '194000',
        modelImage: images.product_06_image_01,
        image: images.product_06_image_02,
        categorySlug: 'ao-thun',
        slug: 'ao-thun-polo-03',
        colors: ['black'],
        sizes: ['S', 'M', 'XL'],
        isNewProduct: true,
        count: 56,
    },
    {
        id: 7,
        name: 'Áo sơ mi Caro 01',
        price: '194000',
        modelImage: images.product_07_image_01,
        image: images.product_07_image_02,
        categorySlug: 'ao-so-mi',
        slug: 'ao-so-mi-caro-01',
        colors: ['white', 'red', 'orange', 'blue'],
        sizes: ['L', 'XL'],
        isNewProduct: true,
        count: 809,
    },
    {
        id: 8,
        name: 'Áo sơ mi dài tay 01',
        price: '194000',
        modelImage: images.product_08_image_01,
        image: images.product_08_image_02,
        categorySlug: 'ao-so-mi',
        slug: 'ao-so-mi-dai-tay-01',
        colors: ['white', 'red', 'black'],
        sizes: ['S', 'M', 'XL'],
        isNewProduct: false,
        count: 667,
    },
    {
        id: 9,
        name: 'Áo sơ mi dài tay 02',
        price: '194000',
        modelImage: images.product_09_image_01,
        image: images.product_09_image_02,
        categorySlug: 'ao-so-mi',
        slug: 'ao-so-mi-dai-tay-02',
        colors: ['white', 'blue'],
        sizes: ['M'],
        isNewProduct: false,
        count: 255,
    },
    {
        id: 10,
        name: 'Quần jean phong cách 01',
        price: '194000',
        modelImage: images.product_10_image_01,
        image: images.product_10_image_02,
        categorySlug: 'quan-jean',
        slug: 'quan-jean-phong-cach-01',
        colors: ['blue', 'black'],
        sizes: ['L'],
        isNewProduct: true,
        count: 809,
    },
    {
        id: 11,
        name: 'Quần jean phong cách 02',
        price: '194000',
        modelImage: images.product_11_image_01,
        image: images.product_11_image_02,
        categorySlug: 'quan-jean',
        slug: 'quan-jean-phong-cach-02',
        colors: ['blue', 'black'],
        sizes: ['S', 'M', 'XL'],
        isNewProduct: true,
        count: 342,
    },
    {
        id: 12,
        name: 'Quần jean phong cách 03',
        price: '194000',
        modelImage: images.product_12_image_01,
        image: images.product_12_image_02,
        categorySlug: 'quan-jean',
        slug: 'quan-jean-phong-cach-03',
        colors: ['blue'],
        sizes: ['S', 'M', 'XL'],
        isNewProduct: true,
        count: 300,
    },
];

export const filterCategories = [
    {
        id: 1,
        display: 'Áo thun',
        categorySlug: 'ao-thun',
        type: 'CATEGORY',
    },
    {
        id: 2,
        display: 'Áo sơ mi',
        categorySlug: 'ao-so-mi',
        type: 'CATEGORY',
    },
    {
        id: 3,
        display: 'Quần jean',
        categorySlug: 'quan-jean',
        type: 'CATEGORY',
    },
];

export const filterColors = [
    {
        id: 1,
        display: 'Trắng',
        color: 'white',
        type: 'COLOR',
    },
    {
        id: 2,
        display: 'Hồng',
        color: 'pink',
        type: 'COLOR',
    },
    {
        id: 3,
        display: 'Đen',
        color: 'black',
        type: 'COLOR',
    },
    {
        id: 4,
        display: 'Cam',
        color: 'orange',
        type: 'COLOR',
    },
    {
        id: 5,
        display: 'Xanh dương',
        color: 'blue',
        type: 'COLOR',
    },
];

export const filterSizes = [
    {
        id: 1,
        display: 'S',
        size: 'S',
        type: 'SIZE',
    },
    {
        id: 2,
        display: 'M',
        size: 'M',
        type: 'SIZE',
    },
    {
        id: 3,
        display: 'L',
        size: 'L',
        type: 'SIZE',
    },
    {
        id: 4,
        display: 'XL',
        size: 'XL',
        type: 'SIZE',
    },
    {
        id: 5,
        display: 'XXL',
        size: 'XXL',
        type: 'SIZE',
    },
];
