import "./productCategories.css"
import HoodiePic from "../../public/images/hoodiesCatPic.jpg"
import ToasterPic from "../../public/images/Toaster.jpg"
import pantsPic from "../../public/images/pantsPic.jpg"
import electricThings from "../../public/images/ElectronicThings.jpg"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";


const ProductCategories = () => {
  return (
    <div className="ProductCategories">
        <h1 className="categoriesTitle">دسته بندی محصولات</h1>

        <div className="categories">
            <div className="catItems">
                <img src={HoodiePic} alt="" />
                <Link>دسته بندی
                <i><FaArrowRight /></i>
                
                </Link>
            </div>
            <div className="catItems">
                <img src={pantsPic} alt="" />
                <Link>دسته بندی    <i><FaArrowRight /></i>  </Link>

            </div>
            <div className="catItems">
                <img src={electricThings} alt="" />
                <Link> دسته بندی  <i><FaArrowRight /></i>  </Link>
            </div>
            <div className="catItems">
                <img src={ToasterPic} alt="" />
                <Link>دسته بندی   <i><FaArrowRight /></i> </Link>
                
            </div>
        </div>
        <hr />
    </div>
  )
}

export default ProductCategories