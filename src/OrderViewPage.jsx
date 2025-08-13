import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import PrimaryButton from "./components/PrimaryButton";
import { FaArrowLeft, FaStickyNote, FaInfoCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";

const OrderViewPage = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!orderId) return;
        fetch(`http://chatmenu.ru/telegram/client/api/orders/${orderId}/view`)
            .then(res => res.json())
            .then(data => {
                setOrder(data?.order || null);
                setLoading(false);
            });
    }, [orderId]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500">
                Загрузка...
            </div>
        );
    }

    if (!order) {
        return (
            <div className="min-h-screen flex flex-col bg-gray-100">
                <Header userStatus="Морской гурман" city="Севастополь" workingHours="10:00–22:00" />
                <div className="flex items-center gap-3 px-4 py-4 bg-white shadow-sm">
                    <button
                        onClick={() => window.history.back()}
                        className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
                    >
                        <FaArrowLeft className="text-gray-600" />
                    </button>
                    <h1 className="text-lg font-semibold text-gray-800">Детали заказа</h1>
                </div>
                <div className="flex-1 flex items-center justify-center text-gray-500">
                    Заказ не найден
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Header userStatus="Морской гурман" city="Севастополь" workingHours="10:00–22:00" />

            {/* Верхняя панель */}
            <div className="flex items-center gap-3 px-4 py-4 bg-white shadow-md sticky top-0 z-10">
                <button
                    onClick={() => window.history.back()}
                    className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
                >
                    <FaArrowLeft className="text-gray-600" />
                </button>
                <h1 className="text-lg font-semibold text-gray-800">
                    Заказ #{order.id}
                </h1>
            </div>

            <div className="flex-1 p-4 pb-24 space-y-4">
                {/* Карточка с инфо по заказу */}
                <div className="bg-white rounded-xl shadow p-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">{order.createdAt}</span>
                        <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                                order.status === 4
                                    ? "bg-green-100 text-green-700"
                                    : "bg-yellow-100 text-yellow-700"
                            }`}
                        >
                            {order.statusLabel}
                        </span>
                    </div>
                    <div className="text-gray-800 font-semibold text-lg mb-1">{order.restaurant}</div>
                    <div className="text-gray-600">Сумма: <span className="font-bold">{order.amount} ₽</span></div>
                </div>

                {/* Список блюд */}
                <div className="bg-white rounded-xl shadow p-4">
                    <h2 className="text-lg font-semibold mb-3">Состав заказа</h2>
                    <div className="space-y-3">
                        {order.dishes?.map((dish) => (
                            <div
                                key={dish.id}
                                className="flex items-center gap-3 border-b pb-3 last:border-0 last:pb-0"
                            >
                                {dish.image ? (
                                    <img
                                        src={dish.image}
                                        alt={dish.title}
                                        className="w-16 h-16 rounded-lg object-cover border"
                                    />
                                ) : (
                                    <div className="w-16 h-16 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500">
                                        📷
                                    </div>
                                )}
                                <div className="flex-1">
                                    <div className="font-medium text-gray-800">{dish.title}</div>
                                    <div className="text-sm text-gray-500">× {dish.quantity}</div>
                                </div>
                                <div className="font-semibold text-gray-800">{dish.price} ₽</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Комментарий */}
                {order.note && (
                    <div className="bg-white rounded-xl shadow p-4 flex gap-3">
                        <FaStickyNote className="text-gray-500 mt-1" />
                        <div>
                            <h2 className="text-lg font-semibold mb-1">Комментарий</h2>
                            <p className="text-gray-700">{order.note}</p>
                        </div>
                    </div>
                )}

                {/* Дополнительно */}
                {order.info && (
                    <div className="bg-white rounded-xl shadow p-4 flex gap-3">
                        <FaInfoCircle className="text-gray-500 mt-1" />
                        <div>
                            <h2 className="text-lg font-semibold mb-1">Дополнительно</h2>
                            <p className="text-gray-700">
                                {order.info.asap
                                    ? "Приготовить как можно скорее"
                                    : "К определенному времени"}
                            </p>
                            {order.info.countPerson && (
                                <p className="text-gray-700">
                                    Кол-во персон: {order.info.countPerson}
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Кнопка повторить */}
            <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
                <PrimaryButton className="w-full">Повторить заказ</PrimaryButton>
            </div>
        </div>
    );
};

export default OrderViewPage;
