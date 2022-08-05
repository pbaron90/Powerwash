import './services.scss';
import { Hero, Footer, Filler } from '../../components';
import { GiHouse } from 'react-icons/gi';

const Jobs = () => (
  <div className="services__main_bottom-jobs">
    <div className="jobs-container">
      <div className="jobs-icon">
        <GiHouse />
      </div>
      <h3>Type of Job</h3> 
      <p>Amet, pellentesque vitae Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptates voluptate. Dolore obcaecati sapiente quo nam deserunt. sollicitudin habitant adipiscing tortor odio aliquet urna et arcu, ipsum sagittis morbi vivamus at pharetra tristique fames</p>
    </div>
  </div>
)

const Services = () => {
  return (
    <div>
      <div className="services__hero-container">
        <Hero />
      </div>
      <div className="services__main-container">
        <div className="services__main-split">
          <div className="services__main-residential">
            <h1>Residentail</h1>
            <p>Convallis eu a et consectetur sit imperdiet varius velit tellus sollicitudin pellentesque nec arcu enim nulla euismod nisl, rhoncus, odio nullam suspendisse aliquet quis odio accumsan, leo sem ipsum proin neque, facilisis habitasse magna sed justo, varius scelerisque in hendrerit varius gravida arcu neque justo</p>
            <div className="services__main_residential-image"></div>
          </div>

          <div className="services__main-commercial">
            <h1>Commercial</h1>
            <p>Convallis eu a et consectetur sit imperdiet varius velit tellus sollicitudin pellentesque nec arcu enim nulla euismod nisl, rhoncus, odio nullam suspendisse aliquet quis odio accumsan, leo sem ipsum proin neque, facilisis habitasse magna sed justo, varius scelerisque in hendrerit varius gravida arcu neque justo</p>
            <div className="services__main_commercial-image"></div>
          </div>

          <div className="services__main-bottom">
          <Jobs /><Jobs /><Jobs />
          <Jobs /><Jobs /><Jobs />
          </div>
        </div>
      </div>
      <div className="services__footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default Services