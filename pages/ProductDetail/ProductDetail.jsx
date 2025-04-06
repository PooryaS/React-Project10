import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../components/ProductProvider/ProductProvider";
import "./productDetail.css";
import { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../src/store/cart";
import { toPersianChars } from "persian-tools2";

const ProductDetail = () => {
    const { slug } = useParams(); // Extract the slug parameter from the URL
    const products = useContext(ProductContext); // Access the list of products from the ProductContext
    const [currentData, setCurrentData] = useState(null); // State to store the current product's data
    const [quantity, setQuantity] = useState(1); // State to manage the quantity of the product
    const navigate = useNavigate(); // Hook for navigation
    const dispatch = useDispatch(); // Hook for dispatching Redux actions

    const getName = localStorage.getItem('username'); // Retrieve the username from localStorage

    // Function to navigate to the login page if the user is not logged in
    const handlIsLogedin = () => {
        navigate("/login");
    };

    // Function to navigate back to the previous page
    const handleGoBack = () => {
        navigate(-1);
    };

    // Function to decrease the quantity of the product
    const decreaseQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1); // Ensure quantity does not go below 1
    };
    
   // Check if the current product data is not available
if (!currentData) {
    return (
        <div className="Loading">
            <Spinner animation="border" /> {/* Show a loading spinner */}
            <p>محصول پیدا نشد یا در حال بارگذاری...</p> {/* Display a loading or error message */}
        </div>
    );
}

return (
    <div className="ProductDetail">
        <button onClick={handleGoBack}> {"==>"} </button> {/* Button to go back to the previous page */}
        <div className="ProductDiv">
            {/* Product details */}
            <div className="detailsDiv">
                <h2>{currentData.title}</h2> {/* Product title */}
                <p>{currentData.description}</p> {/* Product description */}
                <p>{currentData.category?.name}</p> {/* Product category */}
                <p>قیمت: {toPersianChars(currentData.price + " تومان")}</p> {/* Product price in Persian format */}

                {/* Quantity management and add to cart */}
                <div className="cartNumber">
                    <button onClick={decreaseQuantity}>-</button> {/* Decrease quantity */}
                    <span>{toPersianChars(quantity.toString())}</span> {/* Display current quantity */}
                    <button onClick={increaseQuantity}>+</button> {/* Increase quantity */}
                </div>
                <button
                    onClick={getName ? handleAddToCart : handlIsLogedin} // Add to cart or navigate to login
                    className="addToCartBtn"
                >
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
    </div>
);
}
export default ProductDetail;
