import React, { createContext, useContext, useReducer } from "react";

// 🛒 Начальное состояние
const initialState = {
    items: [], // { id, name, price, quantity, image }
};

// 🧠 Редьюсер
function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM": {
            const existing = state.items.find(item => item.id === action.payload.id);
            if (existing) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }],
                };
            }
        }

        case "REMOVE_ITEM": {
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        }

        case "INCREASE_QUANTITY": {
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        }

        case "DECREASE_QUANTITY": {
            return {
                ...state,
                items: state.items
                    .map(item =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                    .filter(item => item.quantity > 0),
            };
        }

        case "CLEAR_CART": {
            return initialState;
        }

        default:
            return state;
    }
}

// 🎯 Контекст
const CartContext = createContext();

// ✅ Провайдер
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addItem = item => dispatch({ type: "ADD_ITEM", payload: item });
    const removeItem = id => dispatch({ type: "REMOVE_ITEM", payload: id });
    const increaseQuantity = id => dispatch({ type: "INCREASE_QUANTITY", payload: id });
    const decreaseQuantity = id => dispatch({ type: "DECREASE_QUANTITY", payload: id });
    const clearCart = () => dispatch({ type: "CLEAR_CART" });

    const totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems: state.items,
                addItem,
                removeItem,
                increaseQuantity,
                decreaseQuantity,
                clearCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// ⚡ Хук
export const useCart = () => useContext(CartContext);
