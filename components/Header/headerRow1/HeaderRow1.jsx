import { IoSearchOutline } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./headerRow1.css"
import { Link } from "react-router-dom"
const HeaderRow1 = () => {

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
    alert('متن کپی شد!');
    }).catch(err => {
    console.error('خطا در کپی کردن متن: ', err);
    });
    }    

    const PhoneNumber = "09045549305";
    
  const handleClick = () => {
    copyToClipboard(PhoneNumber);
  };
  
  

  return (
    <div className="HeaderRow1">

       
      {/* Right Side Of Header */}
        <div className="rightSide"><p onClick={handleClick}>{PhoneNumber} <i><BsFillTelephoneFill /></i></p></div>
      
      {/* Left Side Of Header */}
        <div className='leftSide'>
 
 
          {/* Header's SearchBox */}
          <div className='SearchBox'>
            <input className="SearchInput" placeholder=" به دنبال چه میگردی..؟!" type="text" />
            <i className="SearchIcon"><IoSearchOutline /></i>
          </div>

            {/* Contact Info */}
            <Link className="AboutUs">درباره ما</Link>
            <Link className="Contact">تماس</Link>
        </div>

      </div>
  )
}

export default HeaderRow1