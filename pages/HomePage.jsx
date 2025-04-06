import Articles from "../components/Articles/Articles"
import Banner from "../components/Banner/Banner"
import Guarantee from "../components/Guarantee/Guarantee"
import PopularProducts from "../components/PopularProducts/PopularProducts"
import ProductCategories from "../components/ProductCategories/ProductCategories"

const HomePage = () => {
  return (
    <div className="HomePage">
        <Banner />
        <ProductCategories/>
        <hr />
        <PopularProducts/>
        <hr />
        <Articles />
        <hr />
        <Guarantee/>
    </div>
  )
}

export default HomePage