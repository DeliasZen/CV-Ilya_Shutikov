class Carousel {
  constructor(p) {
    const settings = { ...{ containerID: '#projects', interval: 5000 }, ...p };
    this.container = document.querySelector(settings.containerID);
    this.interval = settings.interval;
  }


  _initProps() {
    this.slides = this.container.querySelectorAll('.slide');
    this.prevBtn = this.container.querySelector('.control--left');
    this.nextBtn = this.container.querySelector('.control--right');

    this.SLIDES_COUNT = this.slides.length;
    this.currentSlide = 0;
  }

  _initListeners() {
    this.prevBtn.addEventListener('click', this.prev.bind(this));
    this.nextBtn.addEventListener('click', this.next.bind(this));

    this.container.addEventListener('touchstart', this.swipeStart.bind(this));
    this.container.addEventListener('touchend', this.swipeEnd.bind(this));
  }


  _gotoNth(n) {
    this.slides[this.currentSlide].classList.toggle('active');
    this.currentSlide = (n + this.SLIDES_COUNT) % this.SLIDES_COUNT;
    this.slides[this.currentSlide].classList.toggle('active');
  }

  next() {
    this._gotoNth(this.currentSlide + 1);
    clearInterval(this.timerID)
  }

  prev() {
    this._gotoNth(this.currentSlide - 1);
    clearInterval(this.timerID)
  }

  swipeStart(e) {
    this.swipeStartX = e.changedTouches[0].pageX;
  }

  swipeEnd(e) {
    this.swipeEndX = e.changedTouches[0].pageX;
    this.swipeStartX - this.swipeEndX > 100 && this.next();
    this.swipeStartX - this.swipeEndX < -100 && this.prev();
  }

  init() {
    this._initProps()
    this._initListeners()

    this.timerID = setInterval(() => this._gotoNth(this.currentSlide + 1), this.interval);
  }
}


export default Carousel;