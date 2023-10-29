// import HomeCarousel from "../Components/HomeCarousel"
// import Button from 'react-bootstrap/Button';

import About from "../Components/About"
import Contact from "../Components/Contact"
import Carousel from "../Components/HomeCarousel"

function Home() {
  return (
    <div>
      <Carousel></Carousel>
      <About></About>
      <Contact></Contact>
    </div>
  )
}

export default Home