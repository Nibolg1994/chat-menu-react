import React from "react";
import BurgerIcon  from "../images/icons/barbeque.svg?react";


import { Pizza, Soup, Leaf, IceCream, Wine, Sandwich } from 'lucide-react';

function IconCategory({ name, className }) {
    const icons = {
        burgers: <Sandwich className={className} color="#889aa5"/>,
        salads: <Leaf className={className} color="#6bb185"/>,
        desserts: <IceCream className={className} color="#81b3cd"/>,
    };

    return icons[name] || null;
}

export default IconCategory;