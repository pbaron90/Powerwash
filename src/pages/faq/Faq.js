import './faq.scss';
import { Hero, Footer, Filler } from '../../components'

const Question = () => (
  <div className='question-filler'>
  <h4><span>Q.</span> Loremmetur adipisicing elit. Odit, eaque.</h4>
  <p>Lorem ipsum, dolor sit amet  orem ipsum, dolor sit amet consectetur adipisicing elit. Nobis rem dolorum quidem impedit et magni officiis explicabo dolore repellendus assumenda!</p>
  </div> 
)


const Faq = () => {
  return (
    <div>
      <div className="faq__hero-container">
        <Hero />
      </div>

      <div className="faq__main-container">
        
        <div className="faq__main-intro">
          <h1>FAQ</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus architecto consectetur aperiam iure, culpa reprehenderit incidunt doloremque vero laudantium delectus illo, voluptas quo at aliquam! Suscipit, eveniet. Id, blanditiis! Nam quibusdam ea omnis consectetur quasi et facilis nulla nesciunt quo! Aliquam corrupti nihil eveniet voluptate quis odio facilis libero asperiores modi iste quos dolorum ullam ducimus obcaecati perspiciatis rem non saepe, quibusdam sapiente porro voluptates est cumque id illum. Ad et illo quasi reiciendis architecto sequi amet, nulla nisi eum?</p>
        </div>

        <div className="faq__main-questions">
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />

        </div>

      </div>

      <div className="services__footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default Faq