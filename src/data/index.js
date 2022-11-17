import { BiHomeAlt } from 'react-icons/bi';
import { GiClothes, GiExtractionOrb } from 'react-icons/gi';
import { MdOutlineContactless } from 'react-icons/md';

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
