import { FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className="logo">NaviGator</div>
      <nav>
        <a href="https://www.imdb.com/title/tt12343534/">HOME</a>
        <a href="https://www.imdb.com/title/tt12343534/">ABOUT US</a>
        <a href="https://www.imdb.com/title/tt12343534/">SHOP</a>
        <a href="https://www.imdb.com/title/tt12343534/">LOGIN</a>
        <FaBars className="menu-icon" />
      </nav>
    </header>
  );
};

export default Header;