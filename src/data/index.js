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
