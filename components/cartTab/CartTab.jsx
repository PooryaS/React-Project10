import CartItem from "../CartItem/CartItem"
import "./cartTab.css"
import { useSelector } from 'react-redux'

const CartTab = ({toggleCart , isCartOpen}) => {
    const carts = useSelector(store => store.cart.items)

    return (
    <div id="CartTab" className={`CartTab ${isCartOpen ? 'open' : ''}`}>
      <h2 className="cartTitle">سبد خرید شما</h2>
      <div className="cartList">
          {carts.map((item,key) =>
            <CartItem key={key} data={item}/>
          )}
      </div>
      <div className="cartTabBtns">
        <button className="cartCloseBtn" onClick={toggleCart}>بستن</button>
        <button className="cartChekOut">تسویه</button>
      </div>
    </div>
    
  )
}

export default CartTab