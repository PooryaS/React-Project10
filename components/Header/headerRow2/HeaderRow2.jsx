import { Link } from "react-router-dom";
import "./headerRow2.css";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartTab from "../../cartTab/CartTab";
import { AuthContext } from "../../AuthContext/AuthContext";
import { clearCart } from "../../../src/store/cart";

const HeaderRow2 = ({ toggleCart, isCartOpen }) => {
  const {logout} = useContext(AuthContext);
  const getName = localStorage.getItem("username")
  console.log(getName);
  
  const handleLogout = () => {
    logout();
    dispatch(clearCart());
  }
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);


  return (
    <div className={`HeaderRow2 ${isScrolled ? "scrolled" : ""}`}>
      <div className="rightSide">
        <Link to={"/"} className="logo">
          Logo
        </Link>
        <nav className="nav">
          <li className="MenuItem">
            <Link to={"/"} className="HomePage">
              صفحه اصلی
            </Link>
          </li>
          <li className="MenuItem subMenu">
            محصولات
            <div className="dropMenuDiv">
              <ul className="dropMenu">
                <li className="dropItem">دسته بندی 1</li>
                <li className="dropItem">دسته بندی 2</li>
                <li className="dropItem">دسته بندی 3</li>
                <li className="dropItem">دسته بندی 4</li>
                <li className="dropItem">دسته بندی 5</li>
              </ul>
            </div>
          </li>
          <li className="MenuItem">
            <Link className="AboutUs">درباره ما</Link>
          </li>
        </nav>
      </div>

      <div className="leftSide">
        {getName ? (
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login" className="loginBtn">ورود / عضویت</Link>
        )
        }

        <div className="shoppingCart">
          <i onClick={toggleCart}>
            <FaShoppingCart />
          </i>
          {totalQuantity > 0 ? <p onClick={toggleCart} className="totalQuantity">{totalQuantity}</p>: null}

          <CartTab toggleCart={toggleCart} isCartOpen={isCartOpen} />
        </div>
      </div>
    </div>
  );
};

export default HeaderRow2;