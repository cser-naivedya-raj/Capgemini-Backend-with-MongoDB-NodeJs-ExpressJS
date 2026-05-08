import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    <main>
      {/* Left Side: Circular Image */}
      <div className="image-section">
        <div className="image-wrapper">
          <img
            src="/images.jpg" 
            alt="Happy shopper jumping" 
          />
        </div>
      </div>

      {/* Right Side: Text Content */}
      <div className="text-section">
        <div className="special-offer">SPECIAL OFFER</div>
        <h1>MEGA</h1>
        <h2>SALE</h2>
        <p>
            Welcome To NaviGator
        </p>
        <button className="shop-btn" href="https://www.imdb.com/title/tt12343534/">SHOP NOW</button>
        
        {/* Footer / Socials */}
        <div className="bottom-info">
          <div className="social-icons">
            <div className="icon-circle" href="https://twitter.com/navigator">
              <FaTwitter />
            </div>
            <div className="icon-circle" href="https://facebook.com/navigator">
              <FaFacebookF />
            </div>
            <div className="icon-circle" href="https://instagram.com/navigator">
              <FaInstagram />
            </div>
          </div>
          <a href="https://www.navigator.com" className="website-link" target="_blank" rel="noopener noreferrer">
            www.navigator.com
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;