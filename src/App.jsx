import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from '../components/Header/Header';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import ShowProducts from '../pages/ShowProducts';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductProvider } from '../components/ProductProvider/ProductProvider';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import { useDispatch } from 'react-redux';
import { loadCart } from './store/cart';
import LoginPage from '../pages/LoginPage/LoginPage';

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const dispatch = useDispatch();

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    // بارگذاری وضعیت سبد خرید از localStorage
    useEffect(() => {
        const fetchCartFromStorage = () => {
            try {
                const storedCart = localStorage.getItem("carts");
                if (storedCart) {
                    const localCartItems = JSON.parse(storedCart);
                    dispatch(loadCart(localCartItems));
                }
            } catch (error) {
                console.error('خطا در دریافت داده‌های سبد خرید:', error);
            }
        };

        fetchCartFromStorage();
    }, [dispatch]);

    // باز و بسته کردن تب سبد خرید با تغییر کلاس
    useEffect(() => {
        const cartTab = document.querySelector(".CartTab");
        const main = document.querySelector(".main");
        if (cartTab && main) {
            if (isCartOpen) {
                cartTab.classList.add("open");
                main.classList.add("open");
            } else {
                cartTab.classList.remove("open");
                main.classList.remove("open");
            }
        }
    }, [isCartOpen]);

    return (
        <ProductProvider>
            <div className="App">
                {/* هدر */}
                <Header isCartOpen={isCartOpen} toggleCart={toggleCart} />
                <main className="main">
                    <Routes>
                        {/* صفحه ی لاگین */}
                         <Route path='/login' element={<LoginPage/>}/>
                        {/* صفحه اصلی */}
                        <Route path="/" element={<HomePage />} />

                        {/* لیست محصولات */}
                        <Route path="/products" element={<ShowProducts />} />

                        {/* جزئیات محصول */}
                        <Route path="/products/:slug" element={<ProductDetail />} />

                        {/* صفحه خطا */}
                        <Route path="/*" element={<ErrorPage />} />
                    </Routes>
                </main>
            </div>
        </ProductProvider>
    );
}

export default App;
