import { Link } from "react-router-dom";
import "./articles.css"
import { FaEye } from "react-icons/fa6";

const Articles = () => {
  return (
    <div className="Articles">
        <h1>مقالات فروشگاه</h1>

        <div className="articlesDiv">
            <div className="articleItem">

                <p>این یک مقاله است</p>
                
                <div className="Cover"> <Link><FaEye /></Link> </div>

            </div>
            <div className="articleItem">

                <p>این یک مقاله است</p>
                
                <div className="Cover"> <Link><FaEye /></Link> </div>

            </div>
            <div className="articleItem">

                <p>این یک مقاله است</p>
                
                <div className="Cover"> <Link><FaEye /></Link> </div>

            </div>
        <hr />
        </div>
    </div>
  )
}

export default Articles