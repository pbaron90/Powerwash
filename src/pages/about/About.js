import './about.scss';
import { Hero, Footer, Filler } from '../../components'

const Team = () => (
  <>
  <div className="about__main-members-fill">
    <div className="circle"></div>
    <h2>Team Member</h2>
    <p>Mattis varius vitae viverra sed sodales lacinia viverra leo nunc nibh dignissim orci utuctor ac porttitor sit venenatis elit dictum ac, lobortis eu</p>
  </div>
  </>
)
const About = () => {
  return (
    <div className='about-container'>
      <div className="about__hero-container">
        <Hero />
      </div>

      <div className="about__main-container">
        <div className="about__main-intro">
          <h1>What We Do</h1>
          <p>Vitae id varius malesuada et fringilla dictumst eget nunc erat nunc, iaculis id mi ursus ut quis sed semper vitae eu pharetra nulla quam interdum adipiscing blandit nibh leo viverra sed tortor nisi, tempus hendrerit rhoncus pellentesque molestie tincidunt odio morbi risus bibendum mauris quis pulvinar eleifend morbi sodales est adipiscing eu amet vitae
             gilla dictumst eget nunc erat nunc, iaculis id mi ursus ut quis sed semper vitae eu pharetra nulla quam interdum adipiscing blandit nibh leo viverra sed tortor nisi, tempus hendrerit rhoncus pellentesque molestie tincidunt odio morbi risus bibendum mauris quis pulvinar eleifend morbi sodales est a</p>
        </div>
        
        <div className="about__main-team">
          <h1>Meet The Team</h1>
          <div className="about__main-members">
            <Team />
            <Team />
            <Team />
            <Team />
            <Team />
            </div>
          </div>


      </div>

      <div className="services__footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default About