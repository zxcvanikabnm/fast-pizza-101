import { Suspense } from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
        <div className="font-roboto-mono grid h-screen grid-rows-[auto_1fr_auto]">
            {isLoading && <Loader />}

            <Header />
            <div className="overflow-scroll">
                <main className="max-w-3xl mx-auto">
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </main>
            </div>
            <CartOverview />
        </div>
    );
}

export default AppLayout;
