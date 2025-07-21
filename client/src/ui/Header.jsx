// import React from "react";
import { Suspense } from 'react';
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
    return (
        <header>
            <Link to="/">Fast Pizza 101 Co.</Link>
            <p>we only serve delicious pizza</p>
            <Suspense fallback={<div>Loading order...</div>}>
                <SearchOrder />
            </Suspense>            
        </header>
    );
}

export default Header;
