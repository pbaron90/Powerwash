import './home.scss';
import { Hero, Footer, Filler } from '../../components'


const Home = () => {
  return (
    <div>
      <div className="home__hero-container">
        <Hero />
      </div>

      <div className="home__main-container">
        <h1>Howdy</h1>
        <div className="home__main-left">
          <h3>Heading</h3>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem voluptates vel maiores ullam eum a libero eos, similique in. consectetur adipisicing elit. Est delectus aliquid nobis reprehenderit, fugit explicabo odit autem voluptates accusamus laborum, officiis laboriosam ea commodi. Doloremque dicta blanditiis ullam ducimus sapiente omnis suscipit illum, distinctio expedita ipsum magnam culpa asperiores ea.</p>
          <a href="#"><button>Click Here</button></a>

          <h3>Heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est delectus aliquid nobis reprehenderit, fugit explicabo odit autem voluptates accusamus laborum, officiis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis voluptatum voluptas quae eius nam fugit inventore, natus deserunt magnam commodi. laboriosam ea commodi. Doloremque dicta blanditiis ullam ducimus sapiente omnis suscipit illum, distinctio expedita ipsum magnam culpa asperiores ea.</p>
          <a href="#"><button>Click Here</button></a>
        </div>

        <div className="home__main-right"></div>
        
        <div className="home__main-bottom">
          <h3>Heading</h3>
          <p>Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dolor perspiciatis sit modi autem quas vitae explicabo iste ducimus architecto. adipisicing elit. Ab dicta ducimus sint doloribus aliquid dolor neque eum similique ea et asperiores, id vel accusamus adipisci aut, perspiciatis nemo, minus cum! Modi iste ipsa facilis alias officiis repellat? Debitis amet neque placeat soluta eligendi, ad est illo tenetur id error reiciendis natus! Iusto quam similique inventore laudantium praesentium minima sunt ex, magni quos incidunt eligendi, porro molestiae ratione ab culpa, saepe quo perferendis cum eos! Voluptas numquam aspernatur quae tempore distinctio!</p>
        </div>
      </div>

      <div className="services__footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default Home