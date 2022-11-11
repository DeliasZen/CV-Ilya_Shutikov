import Carousel from "./carousel.js";
import { Languages, Links } from "../../data.js";

class ProCarousel extends Carousel {

  _initProps() {
    super._initProps();

    this.description = document.querySelector('.description__text');
    this.description.innerText = Languages.description[0][window.location.hash.substr(1)]

    this.name = document.querySelector('#project-name')
    this.name.innerHTML = Links[0].name;

    this.webPage = document.querySelector('#webpage')
    this.webPage.innerHTML = `<a href="${Links[0].webPage} " target="blank" class="fillLink"></a>WebPage`;
    console.log(Links[0].webPage);

    this.gitHub = document.querySelector('#github')
    this.gitHub.innerHTML = `<a href="${Links[0].gitHub} " target="blank" class="fillLink"></a>GitHub`;
  }

  _gotoNth(n) {
    super._gotoNth(n);

    this.linkNum = (n + Links.length) % Links.length;

    this.description.innerText = Languages.description[this.linkNum][window.location.hash.substr(1)];
    this.name.innerHTML = Links[this.linkNum].name;
    this.webPage.innerHTML = `<a href="${Links[this.linkNum].webPage}" target="blank" class="fillLink"></a>WebPage`;
    this.gitHub.innerHTML = `<a href="${Links[this.linkNum].gitHub}" target="blank" class="fillLink"></a>GitHub`;
  }
}

export default ProCarousel