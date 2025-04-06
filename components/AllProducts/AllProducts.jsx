import { useContext, useState, useEffect } from "react";
import "./allProducts.css";
import { ProductContext } from "../ProductProvider/ProductProvider";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../src/store/cart";

const AllProducts = () => {
    const products = useContext(ProductContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const [selectedCategory, setSelectedCategory] = useState("all"); // Selected Product
    const [filteredProducts, setFilteredProducts] = useState([]); // Filtered Products
    const navigate = useNavigate()
    const getName = localStorage.getItem("username"); //getting userName From LocalStorage
    const dispatch = useDispatch();
    
    // handling Back to Previous page func
    const handleGoBack = () => {
        navigate(-1);
    }
    // handling Add to cart func
    const handleAddToCart = (item) => {
                dispatch(addToCart({
                    productId: item.id,
                    quantity: 1,
                }));
            };
    // truncated the description
    const truncateText = (text, maxLength) => {
        return text.length <= maxLength ? text : text.substring(0, maxLength) + '...';
    };
    // handling the Produvcts category
    const handleCategoryChange = (event) => {
        const category = event.target.value; // getting the value from select tag and  set it on category
        setSelectedCategory(category);
        // checking the conditions for selected category that have to show
        if(category === "all"){
            setFilteredProducts(products);
        }else if(category === ""){
            const filtered = products.filter((product)=> product.category.name === category);
            setFilteredProducts(filtered)
        }else if(category === "Clothes" || category === "Furniture" || category === "Shoes"){
            const filtered = products.filter((product)=> product.category.name === category);
            setFilteredProducts(filtered)
        }else if(category === "Lowest"){
            const sortByLowestPrice = [...products].sort((a,b)=> a.price - b.price);
            setFilteredProducts(sortByLowestPrice)
        }else if(category === "Highest"){
            const sortByHighestPrice = [...products].sort((a,b)=> b.price - a.price);
            setFilteredProducts(sortByHighestPrice);
        }
        setCurrentPage(1);
    }

    useEffect(() => {
        setFilteredProducts(products); // initialization the products
    }, [products]);

    // Total pages for pagination based on filtered products
    const productsCount = filteredProducts ? Math.ceil(filteredProducts.length / itemsPerPage) : 0;
    // Handle page change for pagination
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber); // Update the current page
    };

    // Get the products to display on the current page
    const currentProducts = filteredProducts
        ? filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        : []; // Slice the filtered products array based on the current page and items per page

    // Function to navigate to the login page
    const handleNavigateToLogin = () => {
        navigate('/login'); // Redirect the user to the login page
    };

    return (
        <div className="AllProducts">
            {/* Button to go back to the previous page */}
            <button className="back-button" onClick={handleGoBack}> Back </button>
            <div className="salam">
                {/* Sidebar for filtering products */}
                <aside className="FilterAside">
                    <h2>فیلترها</h2>
                    <div className="filter">
                        {/* Dropdown for selecting product categories */}
                        <label htmlFor="categoryFilter">دسته‌بندی:</label>
                        <select
                            id="categoryFilter"
                            onChange={handleCategoryChange} // Handle category change
                            value={selectedCategory} // Selected category
                        >
                            <option value="all">همه</option>
                            <option value="">الکترونیک</option> {/* Empty value due to API issue */}
                            <option value="Clothes">پوشاک</option>
                            <option value="Furniture">مبلمان</option>
                            <option value="Shoes">کفش</option>
                            <option value="Lowest">ارزان ترین ها</option>
                            <option value="Highest">گران ترین ها</option>
                        </select>
                    </div>
                </aside>

                {/* Display products */}
                <div className="ProductsDiv">
                    {currentProducts && currentProducts.length > 0 ? (
                        currentProducts.map((item) => (
                            <div className="product" key={item.id}>
                                <img className="productPic" src={item.images[0]} alt={item.title} /> {/* Product image */}
                                <Link to={`/products/${item.slug}`} className="productName">{item.title}</Link> {/* Product name */}
                                <p className="productDescription">{truncateText(item.description, 40)}</p> {/* Truncated product description */}
                                <div className="ShoppingDiv">
                                    <button
                                        onClick={getName ? () => handleAddToCart(item) : handleNavigateToLogin} // Add to cart or navigate to login
                                        className="addToCartBtn"
                                    >
                                        افزودن به سبد
                                    </button>
                                    <p className="Price">${item.price}.00</p> {/* Product price */}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>
                            <h2> متاسفانه آیتمی یافت نشد..!</h2> {/* Message if no products are found */}
                        </div>
                    )}
                </div>
            </div>

            {/* Pagination section */}
            <div className="Pagination">
                {Array.from({ length: productsCount }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`pageButton ${currentPage === index + 1 ? 'active' : ''}`} // Highlight the active page
                        onClick={() => handlePageChange(index + 1)} // Change page on click
                    >
                        {index + 1} {/* Page number */}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AllProducts;
