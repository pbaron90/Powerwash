import './footer.scss'
import { BsFacebook, BsInstagram, BsTwitter  } from 'react-icons/bs'
import { FaYelp  } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-container'>

      <div className="footer__hours-container">
        <h1>Hours</h1>
        <p>Monday: 6am-8pm</p>
        <p>Tuesday: 6am-8pm</p>
        <p>Wednesday: 6am-8pm</p>
        <p>Thursday: 6am-8pm</p>
        <p>Friday: 6am-8pm</p>
        <p>Saturday: 6am-8pm</p>
        <p>Sunday: 6am-8pm</p>
      </div>

      <div className="footer__hours-container-mobile">
      <h1>Hours</h1>
        <p>Mon - Fri: 6am-8pm</p>
        <p>Sat & Sun: Hours Differ</p>
      </div>

      <div className="footer__contact-container">
        <h1>Contact Us</h1>
        <div className="footer__contact-info">
          <div className="footer__contact-info_phone">
            <h2>Phone Number</h2>
            <p>(704) - 123 - 4567</p>
          </div>
          <div className="footer__contact-info-email">
            <h2>Email</h2>
            <p>emailgoeshere@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="footer__social-container">
        <h1>Social Media</h1>
        <div className="footer__social-icons">
          <a href="#"><BsFacebook className='fbook' /></a>
          <a href="#"><BsInstagram className='insta' /></a>
          <a href="#"><FaYelp className='yelp' /></a>
          <a href="#"><BsTwitter className='twit' /></a>

        </div>
      </div>
    </div>
  )
}

export default Footer