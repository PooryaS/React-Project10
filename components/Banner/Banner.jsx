import "./banner.css"
import BannerPic from "../../public/images/ClothesBanner.jpg"
import { Link } from "react-router-dom"
import { FaEye } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="Banner">
        <div className="bannerPic">
            <img src={BannerPic}/>
        <div className="captionSide">
            <div className="bannerCaption">
            <h1>نام فروشگاه یا یک شعار</h1>
            <Link to={'/products'}> مشاهده محصولات <i className="faEye"><FaEye/></i> </Link>
            </div>
        </div>
            <div className="cover"></div>
        </div>
        <hr />
    </div>
  )
}

export default Banner