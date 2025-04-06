import "./popularProducts.css"
import { useContext } from "react"
import { ProductContext } from "../ProductProvider/ProductProvider"
import { Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useSelector , useDispatch } from "react-redux";
import { addToCart } from "../../src/store/cart";
import { AuthContext } from "../AuthContext/AuthContext";

const PopularProducts = () => {
    const getName = localStorage.getItem("username"); // Retrieve the username from localStorage

    const products = useContext(ProductContext); // Access the list of products from ProductContext
    const navigate = useNavigate(); // Hook for navigation

    // Function to navigate to the login page
    const handleNavigate = () => {
        navigate('/login'); // Redirect to the login page
    };

    // Function to truncate long text
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text; // Return the text if it's within the max length
        }
        return text.substring(0, maxLength) + '...'; // Truncate and add ellipsis
    };

    const carts = useSelector(store => store.cart.items); // Access cart items from Redux store
    console.log(carts); // Log cart items for debugging

    const dispatch = useDispatch(); // Hook for dispatching Redux actions

    // Function to handle adding items to the cart
    const handleAddToCart = (item) => {
        dispatch(addToCart({
            productId: item.id, // ID of the product
            quantity: 1, // Default quantity to add
        }));
    };

    return (
        <div className="PopularProducts">
            <div className="productsTitle">
                <h1>محصولات پرطرفدار</h1> {/* Title for the popular products section */}
                <Link to={'/products'}>مشاهده همه محصولات <i><FaEye /></i></Link> {/* Link to view all products */}
            </div>

            <div className="ProductsDiv">
                {/* Check if products exist and display them */}
                {products && products.length > 0 ? (
                    products.slice(0, 4).map((item) => ( // Display only the first 4 products
                        <div className="Product" key={item.id}>
                            <img className="productPic" src={item.images[0]} alt={item.title} /> {/* Product image */}
                            <Link to={`/products/${item.slug}`} className="productName">{item.title}</Link> {/* Product title */}
                            <p className="productDescription">{truncateText(item.description, 40)}</p> {/* Truncated product description */}
                            <div className="ShoppingDiv">
                                <button
                                    className="addToCartBtn"
                                    onClick={getName ? () => handleAddToCart(item) : handleNavigate} // Add to cart or navigate to login
                                >
                                    افزودن به سبد
                                </button>
                                <p className="Price">{`$${item.price}.00`}</p> {/* Product price */}
                            </div>
                        </div>
                    ))
                ) : (
                    <i><Spinner /></i> // Show a spinner if products are loading or unavailable
                )}
            </div>
            <hr />
        </div>
    );
};

export default PopularProducts