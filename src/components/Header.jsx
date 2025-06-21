import React from "react";
import { FaClock, FaUserCircle } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GiMeal } from "react-icons/gi";

const Header = ({
                    userStatus = "Морской гурман",
                    city = "Севастополь",
                    workingHours = "10:00–22:00",
                }) => {
    return (
        <header className="bg-white shadow-sm px-3 py-2 sticky top-0 z-50 w-full">
            <div className="flex flex-wrap items-center justify-between gap-1 sm:gap-4">

                {/* Левая часть: Город и время */}
                <div className="flex items-center text-xs text-gray-600 gap-2">
                    <MdLocationOn className="text-blue-500 text-sm" />
                    <span className="whitespace-nowrap">{city}</span>
                    <FaClock className="text-green-500 text-sm ml-2" />
                    <span>{workingHours}</span>
                </div>

                {/* Центр: Название */}
                <div className="text-sm font-semibold text-gray-800 text-center flex-1 sm:flex-none">
                    ChatMenu
                </div>

                {/* Правая часть: статус и иконка */}
                <div className="flex items-center gap-1 text-xs text-blue-600">
                    <GiMeal className="text-yellow-400 text-base flex-shrink-0" />
                    <span className="text-[11px] leading-tight break-words max-w-[80px] text-center">
            {userStatus}
          </span>
                    <FaUserCircle className="text-lg text-gray-500 ml-2 hover:text-gray-700 transition cursor-pointer" />
                </div>
            </div>
        </header>
    );
};

export default Header;