import { NAV_ITEMS } from "../utils";

const MenuItems = ({ isMobile }) => {

    return (
        <>
            {NAV_ITEMS.map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    className={`font-medium text-gray-600 ${isMobile ? 'block p-2' : 'flex items-center'} ${item.isButton ? 'bg-black text-white px-5 py-2.5 rounded hover:bg-gray-800 transition-colors' : ''}`}
                >
                    {item.name}
                </a>
            ))}
        </>
    );
};

export default MenuItems