import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import PrimaryButton from "./components/PrimaryButton";
import DangerButton from "./components/DangerButton";
import { FaArrowLeft } from "react-icons/fa";
import {useRestaurant} from "./context/RestaurantContext.jsx";

const OrdersHistory = () => {
    const [activeTab, setActiveTab] = useState("reservations");
    const [reservations, setReservations] = useState([]);
    const [orders, setOrders] = useState([]);4
    const {restaurant} = useRestaurant();

    useEffect(() => {
        if (!restaurant || !restaurant.id) return;
        if (activeTab === "reservations") {
            fetch(`http://chatmenu.ru/telegram/client/api/reservations/list?restaurant_id=${restaurant.id}`)
                .then(res => res.json())
                .then(data => setReservations(Array.isArray(data?.reservations) ? data.reservations : []));
        } else {
            fetch(`http://chatmenu.ru/telegram/client/api/orders/list?restaurant_id=${restaurant.id}`)
                .then(res => res.json())
                .then(data => setOrders(Array.isArray(data?.orders) ? data.orders : []));
        }
    }, [activeTab, restaurant?.id]);

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Header
                userStatus="Морской гурман"
                city="Севастополь"
                workingHours="10:00–22:00"
            />

            <div className="flex items-center gap-3 px-4 py-4 bg-white shadow-sm">
                <button
                    onClick={() => window.history.back()}
                    className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
                >
                    <FaArrowLeft className="text-gray-600" />
                </button>
                <h1 className="text-lg font-semibold text-gray-800">
                    Мои брони и заказы
                </h1>
            </div>

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

            <div className="flex-1 overflow-auto p-4 space-y-4">
                {activeTab === "reservations" &&
                    reservations.map((res) => (
                        <div key={res.id} className="bg-white p-4 rounded-lg shadow">
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
                                <PrimaryButton className="flex-1">Изменить</PrimaryButton>
                                <DangerButton className="flex-1">Отменить</DangerButton>
                            </div>
                        </div>
                    ))}

                {activeTab === "orders" &&
                    orders.map((order) => (
                        <div key={order.id} className="bg-white p-4 rounded-lg shadow">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm text-gray-500">
                                    Заказ #{order.id} — {order.date}
                                </span>
                                <span
                                    className={`text-sm font-medium ${
                                        order.status === 4
                                            ? "text-green-600"
                                            : "text-yellow-600"
                                    }`}
                                >
                                    {order.statusLabel}
                                </span>
                            </div>
                            <div className="text-gray-800 font-medium">
                                Сумма: {order.total} ₽
                            </div>
                            <PrimaryButton
                                className="mt-3 w-full"
                                onClick={() => {
                                    fetch(`/api/orders/${order.id}`)
                                        .then(res => res.json())
                                        .then(details => {
                                            console.log("Детали заказа:", details);
                                        });
                                }}
                            >
                                Подробнее
                            </PrimaryButton>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default OrdersHistory;
