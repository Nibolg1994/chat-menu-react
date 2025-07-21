import React from "react";
import { FaUserCircle, FaClipboardList } from "react-icons/fa";
import logo from "../images/logo.png";

const Header = ({
                    restaurantName = "Hispaniola Lounge",
                    userStatus = "Морской гурман",
                    onOrdersClick,
                }) => {
    return (
        <header className="w-full px-4 py-2 bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4">

                {/* Логотип + Название */}
                <div className="flex items-center gap-2 min-w-0 flex-grow">
                    <img src={logo} alt="Логотип" className="w-10 h-10 object-contain flex-shrink-0" />
                    <span className="text-base sm:text-lg font-semibold text-gray-800 font-inter truncate whitespace-nowrap overflow-hidden">
    {restaurantName}
  </span>
                </div>

                {/* Иконки + Бейдж */}
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">

                    {/* Статус-бейдж */}
                    <div className="px-2 py-1 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 text-white text-[11px] font-medium shadow-sm leading-tight whitespace-nowrap"
                         style={{
                             background: "linear-gradient(135deg, #7e5bef, #a78bfa)",
                             boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                         }}
                    >
                        {userStatus}
                    </div>

                    {/* Заказы */}
                    <button
                        className="text-[18px] hover:text-gray-800 text-gray-600 transition"
                        aria-label="Мои заказы"
                        onClick={onOrdersClick}
                    >
                        <FaClipboardList />
                    </button>

                    {/* Аккаунт */}
                    <button
                        className="text-[20px] text-gray-600 hover:text-gray-800 transition"
                        aria-label="Аккаунт"
                    >
                        <FaUserCircle />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
