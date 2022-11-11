import ProCarousel from "./carousel-projects.js";
import Carousel from "./carousel.js";
import { Butler, Language } from "./options.js";
// import  from "./options.js";

const projectsSlider = new ProCarousel({
  containerID: '#projects',
  interval: 7000
});

const coursesSlider = new Carousel({
  containerID: '#certificates',
  interval: 8000
})
const language = new Language('EN')
const butler = new Butler;


projectsSlider.init()
coursesSlider.init()
language.init()
butler.init()