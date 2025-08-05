import React, { createContext, useContext, useEffect, useState } from 'react';

const RestaurantContext = createContext();

export const RestaurantProvider = ({ slug, children }) => {
    const [restaurant, setRestaurant] = useState(null);
    const [menu, setMenu] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) {
            return;
        }
        const fetchRestaurantData = async () => {
            try {
                setLoading(true);

                const res = await fetch('http://chatmenu.ru/telegram/client/api/restaurant/' + slug);
                const data = await res.json();

                if (!data || typeof data !== 'object') {
                    console.warn('❗️ Invalid restaurant data:', data);
                    return;
                }

                const validMenu = Array.isArray(data.menu)
                    ? data.menu.filter(item => item.id && item.title)
                    : [];

                console.log('Valid menu items:', JSON.stringify(validMenu));

                const validCategories = Array.isArray(data.categories)
                    ? data.categories.filter(cat => cat.id && cat.title)
                    : [];

                console.log('Valid categories:', JSON.stringify(validCategories));

                setRestaurant({
                    id: data.id,
                    name: data.name,
                    logo: data.logo,
                });

                setMenu(validMenu);
                setCategories(validCategories);

            } catch (error) {
                console.error('Ошибка при загрузке данных ресторана:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurantData();
    }, [slug]);

    return (
        <RestaurantContext.Provider value={{ restaurant, menu, categories, loading }}>
            {children}
        </RestaurantContext.Provider>
    );
};

export const useRestaurant = () => useContext(RestaurantContext);
