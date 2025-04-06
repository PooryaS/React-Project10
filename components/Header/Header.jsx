import './header.css';
import HeaderRow1 from './headerRow1/HeaderRow1';
import HeaderRow2 from './headerRow2/HeaderRow2';

const Header = ({ toggleCart, isCartOpen }) => {
  return (
    <header className='header'>
      <div className='headerBox'>
        {/* Importing First Row of Header and seperate it */}
        <HeaderRow1 />
        {/* <hr /> */}
        <HeaderRow2 toggleCart={toggleCart} isCartOpen={isCartOpen} />
      </div>
    </header>
  );
}

export default Header;
