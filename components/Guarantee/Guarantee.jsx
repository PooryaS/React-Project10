import { CiDeliveryTruck } from "react-icons/ci";
import "./guarantee.css"
import { IoIosPricetags } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";

const Guarantee = () => {
  return (
    <div className="Guarantee">
        <h1>ضمانت های ما</h1>

        <div className="GuaranteeDiv">
            <div className="guaranteeItem">
                <i><IoIosPricetags /></i>
                <p>ضمانت بهترین قیمت</p>
            </div>
            <div className="guaranteeItem">
                <i><AiFillProduct /></i>
                <p>ضمانت اصالت کالا</p>
            </div>
            <div className="guaranteeItem">
                <i><CiDeliveryTruck /></i>
                <p>مرجوعی هفت روزه کالا</p>
            </div>
            <div className="guaranteeItem">
                <i><MdPayment /></i>
                <p>خرید اقساطی</p>
            </div>
        </div>
    </div>
  )
}

export default Guarantee