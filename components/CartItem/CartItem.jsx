import "./cartItem.css"
import React, { useEffect, useState , useContext } from 'react'
import { ProductContext } from '../ProductProvider/ProductProvider';
import { useDispatch } from "react-redux";
import { changeQuantity } from "../../src/store/cart";

const CartItem = (props) => {
    const { productId , quantity } = props.data;
    const [detail , setDetail] = useState(null);
    const products = useContext(ProductContext);
    const dispatch = useDispatch();

    useEffect(() => {
        if (products.length > 0) {
            const findDetail = products.find(product => product.id === productId);
            setDetail(findDetail);
        }
    }, [productId, products]);

    const truncateText = (text , maxLength) => {
      if(text.length <= maxLength ){
        return text;
      }
        return text.substring(0,maxLength) + "...";
    }

    const handleDecreaseQuantity = () => {
      dispatch(changeQuantity({
        productId: productId,
        quantity: quantity - 1
      }));
    }

    const handleIncreaseQuantity = () => {
      dispatch(changeQuantity({
        productId: productId,
        quantity: quantity + 1
      }));
    }
    
    if (!detail) return null;

    return (
      <div className='CartItem'>
        <img src={detail.images} alt="" />
        <h3>{truncateText(detail.title,25)}</h3>
        <p>${detail.price * quantity}</p>
        
        <div className='quantityHandling'>
          <button onClick={handleDecreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncreaseQuantity}>+</button>
        </div>
      </div>
    );
}

export default CartItem;
