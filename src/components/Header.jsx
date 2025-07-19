import React from "react";
import { FaUserCircle, FaClipboardList } from "react-icons/fa";
import logo from "../images/logo.png"; // Замените путь при необходимости

const Header = ({
                    restaurantName = "Seaside Grill",
                    userStatus = "Морской гурман",
                    onOrdersClick,
                }) => {
    return (
        <header className="w-full px-4 py-3 bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap gap-2 sm:gap-4">

                {/* Логотип + Название ресторана */}
                <div className="flex items-center gap-2 min-w-0">
                    <img src={logo} alt="Логотип" className="w-8 h-8 object-contain flex-shrink-0" />
                    <span className="text-lg sm:text-xl font-semibold text-gray-800 font-inter truncate">
            {restaurantName}
          </span>
                </div>

                {/* Центр: Бэйдж со статусом */}
                <div className="hidden sm:flex items-center">
          <span className="bg-brandBlue text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap">
            {userStatus}
          </span>
                </div>

                {/* Иконки заказов и аккаунта */}
                <div className="flex items-center gap-4 ml-auto sm:ml-0">
                    <button
                        className="text-[20px] transition"
                        aria-label="Мои заказы"
                        onClick={onOrdersClick}
                    >
                        <FaClipboardList className="text-brandBlue" />
                    </button>

                    <button
                        className="text-[22px] transition"
                        aria-label="Аккаунт"
                    >
                        <FaUserCircle className="text-brandBlue" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
