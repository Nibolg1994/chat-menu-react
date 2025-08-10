import React, { useState } from "react";
import Header from "./components/Header";
import PrimaryButton from "./components/PrimaryButton";
import { FaArrowLeft } from "react-icons/fa";
import DangerButton from "./components/DangerButton.jsx";

const OrdersHistory = () => {
    const [activeTab, setActiveTab] = useState("reservations");

    const reservations = [
        {
            id: 1,
            date: "2025-08-12",
            time: "19:00",
            people: 4,
            status: "Подтверждено",
            comment: "Столик у окна",
        },
        {
            id: 2,
            date: "2025-08-15",
            time: "20:30",
            people: 2,
            status: "Ожидает подтверждения",
            comment: "",
        },
    ];

    const orders = [
        {
            id: 101,
            date: "2025-08-08",
            total: 1250,
            status: "В обработке",
        },
        {
            id: 102,
            date: "2025-08-05",
            total: 870,
            status: "Доставлено",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Header
                userStatus="Морской гурман"
                city="Севастополь"
                workingHours="10:00–22:00"
            />

            {/* Назад + заголовок */}
            <div className="flex items-center gap-3 px-4 py-4 bg-white shadow-sm">
                <button
                    onClick={() => window.history.back()}
                    className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
                    aria-label="Назад"
                >
                    <FaArrowLeft className="text-gray-600" />
                </button>
                <h1 className="text-lg font-semibold text-gray-800">
                    Мои брони и заказы
                </h1>
            </div>

            {/* Переключатель вкладок */}
            <div className="flex bg-white border-b border-gray-200">
                <button
                    className={`flex-1 py-3 font-medium ${
                        activeTab === "reservations"
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("reservations")}
                >
                    Бронирования
                </button>
                <button
                    className={`flex-1 py-3 font-medium ${
                        activeTab === "orders"
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("orders")}
                >
                    Заказы
                </button>
            </div>

            {/* Список */}
            <div className="flex-1 overflow-auto p-4 space-y-4">
                {activeTab === "reservations" &&
                    reservations.map((res) => (
                        <div
                            key={res.id}
                            className="bg-white p-4 rounded-lg shadow"
                        >
                            <div className="flex justify-between mb-2">
                                <span className="text-sm text-gray-500">
                                    {res.date} в {res.time}
                                </span>
                                <span
                                    className={`text-sm font-medium ${
                                        res.status === "Подтверждено"
                                            ? "text-green-600"
                                            : "text-yellow-600"
                                    }`}
                                >
                                    {res.status}
                                </span>
                            </div>
                            <div className="text-gray-800">
                                {res.people} персоны
                            </div>
                            {res.comment && (
                                <div className="text-sm text-gray-600 mt-1">
                                    {res.comment}
                                </div>
                            )}
                            <div className="flex gap-2 mt-3">
                                <PrimaryButton className="flex-1">
                                    Изменить
                                </PrimaryButton>
                                <DangerButton className="flex-1">
                                    Отменить
                                </DangerButton>
                            </div>
                        </div>
                    ))}

                {activeTab === "orders" &&
                    orders.map((order) => (
                        <div
                            key={order.id}
                            className="bg-white p-4 rounded-lg shadow"
                        >
                            <div className="flex justify-between mb-2">
                                <span className="text-sm text-gray-500">
                                    Заказ #{order.id} — {order.date}
                                </span>
                                <span
                                    className={`text-sm font-medium ${
                                        order.status === "Доставлено"
                                            ? "text-green-600"
                                            : "text-yellow-600"
                                    }`}
                                >
                                    {order.status}
                                </span>
                            </div>
                            <div className="text-gray-800 font-medium">
                                Сумма: {order.total} ₽
                            </div>
                            <PrimaryButton className="mt-3 w-full">
                                Подробнее
                            </PrimaryButton>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default OrdersHistory;
