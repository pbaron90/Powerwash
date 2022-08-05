import './contact.scss';
import { Hero, Footer, Filler } from '../../components'


const Contact = () => {
  return (
    <div>
      <div className="contact__hero-container">
        <Hero />
      </div>

      <div className="contact__main-container">
        <div className="contact__main-intro">
          <h1>Contact</h1>
          <p>Nunc vestibulum, tincidunt Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, aut atque. Accusantium fuga illo recusandae nemo cupiditate explicabo doloremque corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum similique aut officia tempore aliquam hic sunt, molestias animi ad nobis provident soluta, dolor odit id suscipit! Esse non, beatae vel neque deleniti architecto accusamus reiciendis excepturi aliquam nisi quidem fugiat. mauris habitasse ultricies bibendum ultricies mauris, mattis nunc, libero sit leo, urna</p>
        </div>

        <div className="contact__main-hours">
          <h2>Hours of Operation</h2>
          <div className="contact__main__hours-days">
            <h4>Monday: 6am - 8pm</h4>
            <h4>Tuesday: 6am - 8pm</h4>
            <h4>Wednesday: 6am - 8pm</h4>
            <h4>Thursday: 6am - 8pm</h4>
            <h4>Friday: 6am - 8pm</h4>
            <h4>Saturday: 6am - 8pm</h4>
            <h4>Sunday: 6am - 8pm</h4>
          </div>
        </div>

        <div className="contact__main-form">
          <h1>Email Us</h1>
          <div className="contact__main-form-input">
            <form action="#" className='contact-form'>
              <div className="fname">
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" id="fname" required />
              </div>

              <div className="lname">
                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lname" id="lname" required />
              </div>

              <div className="phone">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" name="phone" id="phone"
                      pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                      required />
              </div>

              <div className="email">        
                <label htmlFor="email">Your Email</label>
                <input type="email" name="email" id="email" />
              </div>
              
              <div className="message">
                <label htmlFor="message">Message Us</label>
                <textarea name="message" id="message" cols="30" rows="10">Tell Us what You Want</textarea>
              </div>

              <input type="submit" value="Submit" className='contact-sumbit' />
            </form>
          </div>

        </div>
      </div>

      <div className="services__footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default Contact