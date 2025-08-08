import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "./components/PrimaryButton";
import Header from "./components/Header";
import { ArrowLeft } from "lucide-react";
import {useCart} from "./context/CartContext.jsx";
import {useRestaurant} from "./context/RestaurantContext.jsx";

const OrderPage = () => {
    const [orderType, setOrderType] = useState("restaurant");
    const [time, setTime] = useState("asap");
    const [customTime, setCustomTime] = useState("");
    const [peopleCount, setPeopleCount] = useState(1);
    const [comment, setComment] = useState("");
    const navigate = useNavigate();
    const { totalPrice, cartItems } = useCart();
    const {restaurant} = useRestaurant();


    const submitOrder = async () => {
        try {
            // Здесь заглушки — ты можешь использовать настоящие значения
            const restaurantID = restaurant.id; // получи из контекста
            const userID = 1; // получи из Telegram WebApp initData
            const amount = totalPrice; // рассчитай из корзины
            const countPerson = peopleCount
            const dishes = cartItems// массив  блюд
            const delivery = orderType === "delivery";
            const info = time === "custom" ? { time: customTime } : { asap: true };

            const body = {
                restaurantID,
                userID,
                amount,
                note: comment,
                countPerson,
                dishes,
                delivery,
                info,
            };

            console.log("Отправляем данные заказа:", body);
            const response = await fetch("http://chatmenu.ru/telegram/client/api/orders/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            const data = await response.json();

            if (!response.ok) {
                console.error("Ошибка при создании заказа:", data);
                alert("Ошибка при оформлении заказа");
                return;
            }

            alert("Заказ успешно оформлен!");
            navigate("/success"); // перенаправь куда нужно
        } catch (error) {
            console.error("Ошибка сети:", error);
            alert("Ошибка соединения с сервером");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header
                userStatus="Морской гурман"
                city="Севастополь"
                workingHours="10:00–22:00"
            />

            <div className="relative max-w-screen-md mx-auto px-4 pb-28 pt-6">
                {/* Назад + Заголовок */}
                <div className="flex items-center gap-3 mb-5">
                    <button
                        onClick={() => navigate("/cart")}
                        className="bg-white p-2.5 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <h1 className="text-xl font-semibold text-gray-900">Оформление заказа</h1>
                </div>

                {/* Тип заказа */}
                <div className="mb-6">
                    <h2 className="text-sm font-medium text-gray-700 mb-2">Тип заказа</h2>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setOrderType("restaurant")}
                            className={`flex-1 py-2 rounded-lg font-medium text-sm ${
                                orderType === "restaurant"
                                    ? "bg-brandBlue text-white"
                                    : "bg-white text-gray-700 border border-gray-300"
                            }`}
                        >
                            В ресторане
                        </button>
                        <button
                            onClick={() => setOrderType("delivery")}
                            className={`flex-1 py-2 rounded-lg font-medium text-sm ${
                                orderType === "delivery"
                                    ? "bg-brandBlue text-white"
                                    : "bg-white text-gray-700 border border-gray-300"
                            }`}
                        >
                            Доставка
                        </button>
                    </div>
                </div>

                {/* Время */}
                <div className="mb-6">
                    <h2 className="text-sm font-medium text-gray-700 mb-2">Время</h2>
                    <div className="flex gap-2 mb-2">
                        <button
                            onClick={() => setTime("asap")}
                            className={`flex-1 py-2 rounded-lg font-medium text-sm ${
                                time === "asap"
                                    ? "bg-brandBlue text-white"
                                    : "bg-white text-gray-700 border border-gray-300"
                            }`}
                        >
                            Как можно скорее
                        </button>
                        <button
                            onClick={() => setTime("custom")}
                            className={`flex-1 py-2 rounded-lg font-medium text-sm ${
                                time === "custom"
                                    ? "bg-brandBlue text-white"
                                    : "bg-white text-gray-700 border border-gray-300"
                            }`}
                        >
                            Назначить время
                        </button>
                    </div>
                    {time === "custom" && (
                        <input
                            type="time"
                            value={customTime}
                            onChange={(e) => setCustomTime(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    )}
                </div>

                {/* Количество персон */}
                {orderType === "restaurant" && (
                    <div className="mb-6">
                        <h2 className="text-sm font-medium text-gray-700 mb-2">Количество персон</h2>
                        <input
                            type="number"
                            min="1"
                            max="20"
                            value={peopleCount}
                            onChange={(e) => setPeopleCount(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                )}

                {/* Комментарий */}
                <div className="mb-6">
                    <h2 className="text-sm font-medium text-gray-700 mb-2">Комментарий к заказу</h2>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows="4"
                        className="w-full p-2 border border-gray-300 rounded-md resize-none"
                        placeholder="Например: 'Положите побольше соуса' или 'Поставьте детский стульчик'"
                    />
                </div>

                {/* Контакт */}
                <div className="mb-6">
                    <h2 className="text-sm font-medium text-gray-700 mb-2">Связаться с нами</h2>
                    <a
                        href="tel:+79781234567"
                        className="block w-full text-center text-brandBlue font-medium underline"
                    >
                        Позвонить: +7 (978) 123-45-67
                    </a>
                </div>
            </div>

            {/* Фиксированная кнопка */}
            <div className="fixed bottom-0 left-0 right-0 bg-white px-4 py-3 shadow-md z-10">
                <div className="max-w-screen-md mx-auto">
                    <PrimaryButton
                        onClick={submitOrder}
                        className="w-full"
                    >
                        Оформить заказ
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
