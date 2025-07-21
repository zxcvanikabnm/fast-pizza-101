// import React from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
    const navigation = useNavigation();
    // console.log(navigation)
    const isLoading = navigation.state === "loading";

    return (
        <div className="layout">
            {isLoading && <Loader />}

            <Header />
            <main>
                <h1>pizza content</h1>
                <Outlet />
            </main>
            <CartOverview />
        </div>
    );
}

export default AppLayout;
